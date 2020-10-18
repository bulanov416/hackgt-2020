import React, { useEffect, useState } from 'react';

import firebase from 'firebase';
import MenuItemObject from "../models/MenuItemObject";

const firebaseConfig = {
    apiKey: "AIzaSyAUrlthvN7-mzjShK52AfthkX6yepCuwgk",
    authDomain: "hackgt2020-5847e.firebaseapp.com",
    databaseURL: "https://hackgt2020-5847e.firebaseio.com",
    projectId: "hackgt2020-5847e",
    storageBucket: "hackgt2020-5847e.appspot.com",
    messagingSenderId: "838591600721",
    appId: "1:838591600721:web:829023369df328b7a18070"
};

function Firebase(props) {
    const { children } = props;
    const [ firestore, setFirestore ] = useState(null);
    const [ menuItems, setMenuItems ] = useState(null);

    useEffect(() => {
        let menuItemsArray = [];
        firebase.initializeApp(firebaseConfig);
        const database = firebase.firestore();
        setFirestore(database);
        database.collection('restaurants').get().then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                let restaurantId = doc.id;
                console.log(restaurantId);
                database.collection('restaurants').doc(doc.id).collection('menuItems').get().then(function(querySnapshot2) {
                    querySnapshot2.forEach(function(doc2) {
                        console.log("CurrentID: ", doc2.id)
                        let category = doc2.get('Category');
                        let description = doc2.get('Description');
                        let name = doc2.get('Name');
                        let currentMenuItem = new MenuItemObject(category, name, description);
                        menuItemsArray.push(currentMenuItem);
                        for (let i = 0; i < menuItemsArray.length; i++) {
                            console.log("Cat: ", menuItemsArray[i].category, " || ", "Desc: ", menuItemsArray[i].description, " || ", "Name: ", menuItemsArray[i].name);
                        }
                    })
                    setMenuItems(menuItemsArray);
                });
            })
        }).catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    }, []);

    const childrenWithProps = React.Children.map(children, child => {
        // checking isValidElement is the safe way and avoids a typescript error too
        const properties = { database: firestore, menuItems: menuItems };
        if (React.isValidElement(child)) {
            return React.cloneElement(child, properties);
        }
        return child;
    });

    return (
        <div> { childrenWithProps } </div>
    );
}

export default Firebase;
