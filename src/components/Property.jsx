import Titles from "./Titles";

// Card Object
const cards = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    title: "Modern Design Villa",
    price: "$3000.00",
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1448630360428-65456885c650?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D",
    title: "Luxury Apartment",
    price: "$1500.00",
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    id: 3,
    image: "https://plus.unsplash.com/premium_photo-1687960117069-567a456fe5f3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D",
    title: "Cozy Cottage",
    price: "$4500.00",
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D",
    title: "Charming Studio",
    price: "$2000.00",
    bedrooms: 1,
    bathrooms: 1,
  },
  {
    id: 5,
    image: "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D",
    title: "Rustic Farmhouse",
    price: "$2500.00",
    bedrooms: 3,
    bathrooms: 2,
  },
];



function CardList({cards}){
  return(
    cards.map(card=>(
      <div className="p-4 bg-white rounded-lg border border-gray-600/10">
          <img
            src={card.image}
            alt="property"/>

          <div className="p-6">
            <h4 className="text-2xl font-bold cursor-pointer">{card.title}</h4>
            <div className="mt-2">
              <span className="text-xl font-extrabold text-blue-600">{card.price}</span> /M
            </div>

          </div>
          <div className="flex justify-between p-4 text-gray-700 border-t border-gray-300">
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-3 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path
                  d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z">
                </path>
              </svg>
              <p><span className="font-bold text-gray-900">{card.bedrooms}</span> Bedrooms</p>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 mr-3 text-gray-600 fill-current" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                  d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z">
                </path>
              </svg>
              <p><span className="font-bold text-gray-900">{card.bathrooms}</span> Bathrooms</p>
            </div>
          </div>
        </div>
    ))
  )
}

function PropertyContainer({cards}){
  return(
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <CardList cards={cards}/>
      </div>
  )
}

export default function Property() {
  
  return (
    <section>
      <div classNameName="container mx-auto">
        <Titles
          title="Properties"
          header="Grab your Dream Property"
          description="There are many variations of passages of Lorem Ipsum available
          but the majority have suffered alteration in some form."
        />
        <PropertyContainer cards={cards}/>
      </div>
    </section>
  );
}
