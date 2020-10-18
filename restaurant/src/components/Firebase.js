import React, { useEffect, useState } from 'react';

import firebase from 'firebase';

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

    useEffect(() => {
        firebase.initializeApp(firebaseConfig);
        const database = firebase.firestore();
        setFirestore(database);
    }, []);

    const childrenWithProps = React.Children.map(children, child => {
        // checking isValidElement is the safe way and avoids a typescript error too
        const properties = { database: firestore };
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
