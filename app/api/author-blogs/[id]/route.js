import { createClient } from "@/utils/supabase/server";

export async function GET(req, { params }) {
  const supabase = await createClient();
  const { id } = params;
  const pageParam = req.nextUrl.searchParams.get("page");
  const page = parseInt(pageParam) || 1;

  const limit = 3;
  const from = (page - 1) * limit;
  const to = from + limit - 1;

  const { data, error } = await supabase
    .from("blogs")
    .select(`*,authors(*),categories(id,name)`)
    .eq("author", id)
    .range(from, to);

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(
    JSON.stringify({
      blogs: data,
      message: "Author blogs with id returned successfully!",
    }),
    {
      headers: { "Content-Type": "application/json" },
    }
  );
}
