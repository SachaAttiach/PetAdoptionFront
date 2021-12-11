// import React from "react";

// function MenuItem(props) {
//   return (
//     // <div className="menuItem">
//     //   <div style={{ backgroundImage: `url(${props.image})` }}> </div>
//     //   <p> {props.name} </p>
//     //   <p> Height: {props.height}cm </p>
//     //   <p> Weight: {props.weight}kg </p>
//     //   <p> Type: {props.type} </p>
//     //   <p> Adopted: {props.adopted} </p>
//     //   <p> Color: {props.color} </p>
//     //   <p> Bio: {props.bio} </p>
//     //   <p> Hypoallergenic: {props.hypoallergenic} </p>
//     //   <p> Diet: {props.diet} </p>
//     //   <p> Breed: {props.breed} </p>
//     // </div>
//   );
// }

// export default MenuItem;

// app.get("/pet/:petID", async (req, res, next) => {
//   const { petID } = req.params;
//   try {
//     const pets = await getPetLibrary();
//     const element = pets.forEach((element) => {
//       if (element.id == petID) {
//         return res.send({ element });
//       }
//     });
//   } catch (err) {
//     next(err);
//   }
// });

// async function getData() {
//   const response = await axios.get(`http://localhost:5500/pet/${id}`);
//   return response.data.element;
// }
//     useEffect(() => {
//         const fetchData = async () => {
//            const data =  await getData()
//             return setData(data)
//         }
//          fetchData()
//     }, [])

//     <Link  to={"/pet/" + Number(data.id)}

//     <Route  exact path="/pet/:petID" element={<PetPage />} />