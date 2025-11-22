import React from 'react';

// Ekhane amra props e 'onSelectCategory' o add korbo jate click korle category filter hoy
function CategoriesNavbar({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {
        // Fix: Added guard clause ((categories || []).map) to prevent 'map is undefined' error
        (categories || []).map((cat) => (
          // Fix: 'key' added, and daisyUI classes used for styling
          <button
            key={cat} 
            onClick={() => onSelectCategory(cat)}
            className={`btn btn-sm md:btn-md rounded-full px-6 transition duration-300 ${
              activeCategory === cat 
                ? 'btn-primary text-white shadow-lg' // Navy Blue filled button
                : 'btn-outline btn-primary hover:bg-primary hover:text-white' // Navy Blue border, White background
            }`}
          >
            {cat}
          </button>
        ))
      }
    </div>
  )
}

export default CategoriesNavbar;