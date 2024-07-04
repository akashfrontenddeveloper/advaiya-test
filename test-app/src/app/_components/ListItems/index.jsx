'use client'

import Image from 'next/image';
import style from './index.module.scss';
import { IoMdHeartEmpty, IoMdHeart } from "react-icons/io";
import React, { useState, useEffect } from 'react';

const ListItems = (props) => {
    const { items } = props;

    const [selectedItems, setSelectedItems] = useState({});

    useEffect(() => {
        const storedIds = JSON.parse(localStorage.getItem('idList')) || [];
        const initialSelectedItems = storedIds.reduce((acc, id) => {
            acc[id] = true;
            return acc;
        }, {});
        setSelectedItems(initialSelectedItems);
    }, []);

    const toggleSelected = (id) => {
        setSelectedItems((prevSelectedItems) => {
            const newSelectedItems = {
                ...prevSelectedItems,
                [id]: !prevSelectedItems[id],
            };

            // Update local storage
            const selectedIds = Object.keys(newSelectedItems).filter(key => newSelectedItems[key]);
            localStorage.setItem('idList', JSON.stringify(selectedIds));

            return newSelectedItems;
        });
    };

    return (
        <div className={style.listItems}>
            {items.map((item) => (
                <div key={item.idMeal} className={`${style.listItem} ${selectedItems[item.idMeal] ? style.selected : ''}`} onClick={() => toggleSelected(item.idMeal)}>
                    <figure>
                        <Image
                            src={item.strMealThumb}
                            alt={item.strMeal}
                            className={style.listImage}
                            width={90}
                            height={90}
                            priority
                        />
                    </figure>
                    <aside>
                        <h4>{item.strMeal}</h4>
                        {selectedItems[item.idMeal] ? <IoMdHeart /> : <IoMdHeartEmpty />}
                    </aside>
                </div>
            ))}
        </div>
    );
};

export default ListItems;
