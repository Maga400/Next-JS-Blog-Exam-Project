import { createClient } from "@/utils/supabase/server";

export async function GET(req, { params }) {
  const page  = parseInt(params.page || 1);
  const limit = 6;
  const from = (page - 1) * limit;
  const to = from + limit - 1;
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("blogs")
    .select(`*,authors(*),categories(id,name)`)
    .range(from,to);

  return new Response(
    JSON.stringify({
      blogs: data,
      message: "All blogs returned succesfully!",
    }),
    {
      headers: { "Content-type": "application/json" },
    }
  );
}
