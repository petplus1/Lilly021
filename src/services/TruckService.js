import { firebase } from "../config";

export async function searchTruckForm(searchObj, truck) {
  console.log(searchObj);
}

export async function getAllTrucks() {
  return firebase
    .database()
    .ref()
    .child("Truck")
    .once("value")
    .then(data => {
      if (data.val() === null) {
        return [];
      }
      let retVal = [];
      Object.values(data.val()).forEach(value => {
        retVal.push(value);
      });
      return retVal;
    });
}
export async function getAllTrucksWithCapacity(ID) {
  return firebase
    .database()
    .ref()
    .child("Truck")
    .orderByChild("capacityID")
    .equalTo(ID)
    .once("value")
    .then(data => {
      if (data.val() === null) {
        return [];
      }
      let retVal = [];
      Object.values(data.val()).forEach(value => {
        retVal.push(value);
      });
      return retVal;
    });
}

export async function getOnaTruck(ID) {
  return firebase
    .database()
    .ref()
    .child("Truck")
    .orderByChild("ID")
    .equalTo(ID)
    .once("value")
    .then(data => {
      if (data.val() === null) {
        return {};
      }
      let obj;
      Object.values(data.val()).forEach(value => {
        obj = value;
      });
      return obj;
    });
}

export async function addNewTruck(newViacle, file, user) {
  let d = new Date();

  let newID = firebase
    .database()
    .ref()
    .child("Truck/")
    .push().key;
  return await firebase
    .storage()
    .ref("truck/" + newID + "/" + file.name)
    .put(file)
    .then(data => {
      let truck = {};
      firebase
        .storage()
        .ref("truck/" + newID + "/" + file.name)
        .getDownloadURL()
        .then(imgUrl => {
          truck = {
            ID: newID,
            emisionID: newViacle.EngineEmision ? newViacle.EngineEmision : "",
            ac: newViacle.ac ? newViacle.ac : "",
            bodyTypeID: newViacle.carBody,
            brandID: newViacle.brand,
            color: newViacle.color ? newViacle.color : "",
            transmitionID: newViacle.transmition,
            garantion: newViacle.garantion ? newViacle.garantion : "",
            creationData: newViacle.generation ? newViacle.generation : "",
            damaged: newViacle.demaged ? newViacle.demaged : "",
            firstOwner: newViacle.firstOwner ? newViacle.firstOwner : "",
            fuelID: newViacle.fuel,
            modelID: newViacle.model,
            numberOfDoors: newViacle.numberOfDoors
              ? newViacle.numberOfDoors
              : "",
            numberOfSeats: newViacle.numberOfSeats,
            price: newViacle.price,
            regionID: newViacle.region ? newViacle.region : "",
            registrationEnd: newViacle.registrationEnd
              ? newViacle.registrationEnd
              : "",
            description: newViacle.description,
            usagedID: newViacle.secondHand ? newViacle.secondHand : "",
            driveID: newViacle.drive,
            picture: imgUrl,
            userID: user.uid,
            email: user.email,
            capacityID: newViacle.capacity,
            clickedOn: 0,
            advertisementCreation: `${d.getFullYear()}-${d.getMonth() +
              1}-${d.getDate()}`
          };
          var updates = {};
          updates["Truck/" + newID] = truck;
          firebase
            .database()
            .ref()
            .update(updates)
            .then(data => {})
            .catch(err => {
              firebase
                .storage()
                .ref("truck/" + newID)
                .delete()
                .then(data => {
                  console.log("nothing saved");
                });
            });
        });
      return newID;
    })
    .catch(err => {
      return err;
    });
}
