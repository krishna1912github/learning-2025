import React from 'react'

function Header() {
  return (
<div className="mt-4 grid grid-cols-2 lg:grid-cols-3">
       <div className="bg-yellow-100 grid grid-cols-2">
        <div>icon</div>
        <div>Personal</div>
     </div>
     <div className="bg-blue-100">Navgition</div>
  </div>
  )
}

export default Header