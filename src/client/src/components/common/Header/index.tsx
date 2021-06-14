import React, { useState }from 'react';



export default function Header() {
  const [head] = useState<string>("Typescript > React Test Environment")

  return (
    <div>
     {head}
    </div>
  )
}