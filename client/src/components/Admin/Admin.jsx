import style from './Admin.module.css';
import React, { useState, useEffect } from 'react';
import Form from '../Form/Form';

const Admin = () => {

    const [guests, setGuests] = useState([]);

    useEffect(() => {
        async function getGuests() {
            const response = await fetch(`https://heli-ki.vercel.app/guests/`);

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }

            const guests = await response.json();
            setGuests(guests);
        }

        getGuests();

        return;
    }, [guests.length]);

    const totalGuests = guests.reduce((acc, guest) => {
        if (guest.rsvp) {
            return acc + (guest.plusOne.rsvp ? 2 : 1);
        }
        return acc;
    }, 0);

    const totalVegans = guests.filter(guest => guest.vegan).length;
    const totalVegetarians = guests.filter(guest => guest.vegetarian).length;
    const totalPescetarians = guests.filter(guest => guest.pescetarian).length;
    
    const tbody = guests
    .map((guest, index) => (
      <tr key={index} className={style.guestsIcons}>
        <td>{guest?.name}</td>
        <td>{guest.rsvp ? <i class="fa-solid fa-check fa-xl"></i> : <i class="fa-solid fa-xmark fa-xl"></i>}</td>
        <td>{guest.rsvp ? (guest.vegan ? <i class="fa-solid fa-seedling"></i> : guest.vegetarian ? <i class="fa-solid fa-carrot fa-xl"></i> : guest.pescetarian ? <i class="fa-solid fa-fish"></i> : <i class="fa-solid fa-drumstick-bite fa-xl"></i>) : <i class="fa-solid fa-xmark fa-xl"></i>}</td>
        {guest.plusOne.rsvp ? (guest.plusOne ? (
          <td>
            {guest.plusOne.rsvp ? <i class="fa-solid fa-check fa-xl"></i> : <i class="fa-solid fa-xmark fa-xl"></i>}
            {guest.plusOne.vegan ? <i class="fa-solid fa-seedling"></i> : guest.plusOne.vegetarian ? <i class="fa-solid fa-carrot fa-xl"></i> : guest.plusOne.pescetarian ? <i class="fa-solid fa-fish"></i> : <i class="fa-solid fa-drumstick-bite fa-xl"></i>}
          </td>
        ) : (
          <td>{!guest.rsvp ? <i class="fa-solid fa-xmark fa-xl"></i> : guest.vegan ? <i class="fa-solid fa-seedling"></i> : guest.vegetarian ? <i class="fa-solid fa-carrot fa-xl"></i> : guest.pescetarian ? <i class="fa-solid fa-fish"></i> : <i class="fa-solid fa-drumstick-bite fa-xl"></i>}</td>
        )) : <td><i class="fa-solid fa-xmark fa-xl"></i></td> }
        <td>{guest?.alergies}</td>
      </tr>
    ));
  
  
  
  


    return (
        <>
            <div className={style.dashboardDiv}>
                <h3 className={style.h3Dashboard}>
                    Dashboard
                </h3>
                <div className={style.guestsDiv}>
                    <div>
                        <h4 className={style.h4Dashboard}>Resumen/Summary</h4>
                        <div className={style.summaryDiv}>
                            <p>Total guests: {totalGuests}</p>
                            <p>Total vegetarians: {totalVegetarians}</p>
                            <p>Total vegans: {totalVegans}</p>
                            <p>Total pescetarians: {totalPescetarians}</p>
                            <p>Not attending: {guests.filter(guest => !guest.rsvp).length}</p>
                        </div>
                    </div>
                    <h4 className={style.h4Dashboard}>Invitad@s/Guests</h4>
                    <table>
                        <thead className={style.guestsIcons}>
                            <th><i class="fa-regular fa-user fa-xl"></i></th>
                            <th><i class="fa-regular fa-calendar-check fa-xl"></i></th>
                            <th><i class="fa-solid fa-utensils fa-xl"></i></th>
                            <th><i class="fa-solid fa-user-plus fa-xl"></i></th>
                            <th><i class="fa-solid fa-comment-medical"></i></th>
                        </thead>
                        <tbody >
                            {tbody}
                        </tbody>
                    </table>
                </div>

                <div><Form /></div>
            </div>

        </>
    )
}


export default Admin;