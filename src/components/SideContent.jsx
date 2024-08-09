import React from 'react'

function SideContent() {
  return (
    <div class="container mx-auto px-4 py-8 max-w-md">
    <div class="grid grid-cols-2 gap-6">
      
      <div class="bg-white rounded-lg p-6 shadow-md hover:-translate-y-2 duration-300">
        <h2 class="text-xl font-semibold mb-2">Topic 1</h2>
        <p class="text-gray-600">Contenido de la tarjeta 1...</p>
      </div>

      
      <div class="bg-white rounded-lg p-6 shadow-md hover:-translate-y-2 duration-300">
        <h2 class="text-xl font-semibold mb-2">Topic 2</h2>
        <p class="text-gray-600">Contenido de la tarjeta 2...</p>
      </div>

      
      <div class="bg-white rounded-lg p-6 shadow-md hover:-translate-y-2 duration-300">
        <h2 class="text-xl font-semibold mb-2">Topic 3</h2>
        <p class="text-gray-600">Contenido de la tarjeta 3...</p>
      </div>

      
      <div class="bg-white rounded-lg p-6 shadow-md hover:-translate-y-2 duration-300">
        <h2 class="text-xl font-semibold mb-2">Topic 4</h2>
        <p class="text-gray-600">Contenido de la tarjeta 4...</p>
      </div>
    </div>
  </div>
  )
}

export default SideContent;