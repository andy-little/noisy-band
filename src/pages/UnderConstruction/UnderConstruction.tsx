import React from 'react';
import style from './UnderConstruction.module.scss';
import { LinkBtn } from '../../components/common';
import Colour from '../../constants/Colour';

const UnderConstruction = () => {
  return (
    <div className={`page ${style.container}`}>
      <h1 className={style.h1}>Under Construction</h1>
      <p className={style.p}>
        This page is currently unavailable.
        <br /> Please check back again soon!
      </p>
      <LinkBtn
        className={style.link}
        options={{ colour: Colour.PRIMARY }}
        url="/"
      >
        Home
      </LinkBtn>
    </div>
  );
};

export default UnderConstruction;
