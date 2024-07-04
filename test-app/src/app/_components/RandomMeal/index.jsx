'use client'

import Image from 'next/image';
import style from './index.module.scss';
import { Button, Card } from 'react-bootstrap';
import React from 'react';

const RandomMeal = ({ item, onGenerate }) => {
  return (
    <div className={style.randomMealWrapper}>
      <Card className={style.randomMealCard}>
        <figure>
          <Image
            src={item.strMealThumb}
            alt={item.strMeal}
            width={100}
            height={100}
            priority
            className={style.randomMealImage}
          />
        </figure>
        <Card.Body>
          <Card.Title className={style.randomMealTitle}>{item.strMeal}</Card.Title>
          <Card.Text>
            {item.strInstructions.length > 300
              ? item.strInstructions.substring(0, 300) + '...'
              : item.strInstructions}
          </Card.Text>
        </Card.Body>
      </Card>

      <Button 
        className={style.randomGenerateBtn} 
        variant="primary" 
        onClick={onGenerate}
      >
        Generate
      </Button>
    </div>
  );
}

export default RandomMeal;
