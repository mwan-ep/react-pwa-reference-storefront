/**
 * Copyright © 2019 Elastic Path Software Inc. All rights reserved.
 *
 * This is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This software is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this license. If not, see
 *
 *     https://www.gnu.org/licenses/
 *
 *
 */
import React from 'react';
import { getConfig } from '../utils/ConfigProvider';

import './b2b.home.page.less';

let intl = { get: str => str };


const B2BHomePage: React.FunctionComponent = () => {
  const epConfig = getConfig();
  ({ intl } = epConfig);

  return (
    <div className="home-page-b2b">
      <section className="main-banner">
        <div className="main-banner-title-wrap">
          <div className="container">
            <h2 className="goods-heading">{intl.get('main-banner-heading')}</h2>
            <div className="main-banner-txt">
              <p className="goods-description">
                {intl.get('main-banner-txt')}
              </p>
              <div className="btn-wrap">
                <button type="button" className="ep-btn primary learn-more-btn">{intl.get('learn-more')}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="main-goods">
          <ul className="main-goods__grid">
            <li className="main-goods__cell">
              <h5 className="goods-title-small">{intl.get('products')}</h5>
              <h3 className="goods-title">{intl.get('product1-heading')}</h3>
              <p className="goods-description">{intl.get('product1-description')}</p>
            </li>
            <li className="main-goods__cell">
              <h5 className="goods-title-small">{intl.get('products')}</h5>
              <h3 className="goods-title">{intl.get('product2-heading')}</h3>
              <p className="goods-description">{intl.get('product2-description')}</p>
            </li>
            <li className="main-goods__cell">
              <h5 className="goods-title-small">{intl.get('products')}</h5>
              <h3 className="goods-title">{intl.get('product3-heading')}</h3>
              <p className="goods-description">
                {intl.get('product3-description')}
              </p>
            </li>
          </ul>

          <div className="main-goods__cell main-goods__block">
            <h5 className="goods-title-small">{intl.get('services')}</h5>
            <h3 className="goods-title">{intl.get('service-heading')}</h3>
            <p className="goods-description">
              {intl.get('service-description')}
            </p>
          </div>

          <div className="main-goods__cell main-goods__block bottom-block">
            <h2 className="goods-heading">{intl.get('about-brand-heading')}</h2>
            <p className="goods-description">
              {intl.get('about-brand-description')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default B2BHomePage;
