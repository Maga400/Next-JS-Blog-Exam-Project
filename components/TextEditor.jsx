"use client";

import { SimpleEditor } from "./tiptap-templates/simple/simple-editor";

export default function TextEditor({setBlogBody}) {
  
  // useEffect(() => {
  //   console.log(blogBody);
  // }, [blogBody]);

  return (
   <div className="w-full h-[350px] mt-[20px] px-[30px] py-[30px] text-[16px] leading-[28px] text-[#232536] border-[2px] border-gray-500 rounded-[5px]">
     <SimpleEditor setBlogBody={setBlogBody}/>
   </div>
  )
}