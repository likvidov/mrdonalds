import React from 'react';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';

const firebaseConfig = {
  apiKey: "AIzaSyA8KyrY5OhahWPfOIF7RMA5xLaXWcW0Gv0",
  authDomain: "mrdonalds-eb3e7.firebaseapp.com",
  projectId: "mrdonalds-eb3e7",
  storageBucket: "mrdonalds-eb3e7.appspot.com",
  messagingSenderId: "574242829654",
  appId: "1:574242829654:web:50e638528fe48b186a12f7"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();

  return (
    <>
      <GlobalStyle />
      <NavBar {...auth} />
      <Order {...orders} {...openItem} {...auth} />
      <Menu {...openItem} />
      {openItem.openItem && <ModalItem {...openItem} {...orders} />}
    </>
  );
}

export default App;
