import React, { useState } from 'react';

import { ImageContainer } from "../imageContainer/ImageContainer.jsx";

import "./productPageContainer.css";

import '../../fonts/Barlow/Barlow-SemiBold.ttf';
import '../../fonts/Barlow/Barlow-Regular.ttf';
import '../../fonts/Barlow/Barlow-Bold.ttf';
import '../../fonts/Barlow/Barlow-ExtraBold.ttf';

import { HiOutlineShoppingBag } from 'react-icons/hi';
import { MdOutlineTextsms } from 'react-icons/md';
import { AiOutlineWhatsApp } from 'react-icons/ai';

export function ProductPageContainer(props) {
  
  const [productCount, setCount] = useState(0);
  if(productCount < 0) { setCount(0); }

  return (
    <div>
      <div className="product-page-product-container">
          <div className="left-container">
            <ImageContainer />
            <div className="product-more-container">
            <p className="product-more-text">Mais produtos de {props.name}:</p>
            <div className="product-more-products">
              <img className="product-more-imgs" src="https://www.receitasdecomidas.com.br/wp-content/uploads/2015/10/rosca-caseira-mineira.jpg" alt="more-products" />
              <img className="product-more-imgs" src="https://cdn.panelinha.com.br/receita/962766000000-Biscoitos-amanteigados.jpg" alt="more-products2"/>
              <img className="product-more-imgs" src="https://s2.glbimg.com/4OcydpWUKjQXqNlRKsX3NoOqeo8=/0x0:1920x1080/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2022/9/q/dlmIdlTfqBAwpg2sGQTg/rosca-caseira.jpg" alt="more-products2"/>
            </div>
          </div>
          </div>
          <div className="right-container">
            <h2 id={"product-title"}>{props.title}</h2>
            <p className='product-produtor-normal'>Produzido e entregue por: 
            <span className='product-produtor-name'> {props.name}</span></p>
            <div className='ratings-container'>
                <span className='ratings-text'>Avaliações:</span>
                <img className='ratings-image' src='../src/assets/icons/static-stars.svg' alt='Avaliações'/>
                <span className='ratins-reputation'>Reputação do Produtor</span>
            </div>
            <div>
                <p className='price-paragraph'>R$ <span className='price-price'>{props.price}</span></p>
                <p className='price-payment-methods'>Pagamento via PIX ou presencialmente na retirada</p>
            </div>
            <div className="product-avalible-container">
              {/* <span>props.avalible</span> */}
              <span className="product-avalible">Disponível</span>
              <span className="product-selected-text">Selecionados: {productCount}</span>{/* tornar interativo */}
              <button className="product-select-button" onClick={() => setCount(productCount - 1)}>-</button>
              <button className="product-select-button" onClick={() => setCount(productCount + 1)}>+</button>
            </div>
            <button className="product-add-button">
              <span className="product-add-button-text">Adicionar a cesta</span>
              <HiOutlineShoppingBag color={"#ffffff"} className="product-add-icon"/>
            </button>
            <div className="product-productor-contact">
            <p>Contato direto com o produtor:</p>
            <div className="product-productor-buttons">
              <button className="product-order-button">
                <span className="product-order-text">Encomendar</span>
              </button>
              <button className="product-order-button-msg">
                <MdOutlineTextsms className="msg-icon" color="#ffffff" />
              </button>
              <button className="product-order-button-msg">
                <AiOutlineWhatsApp className="msg-icon" color="#ffffff" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-description">
        <h2 className="product-description-title">Descrição do produto:</h2>
        <p className="product-descriptio-p">
          {/* {props.description} */}
          A manteiga de garrafa Paraíso de Minas é ótima para produção de biscoitos e pães
           tanto para consumo próprio quanto para comercialização, dando aquele gosto de
            bem-vindo ao lar, com a sua testura e seu sabor que toda boa manteiga deveria
             ter. Feita com produtos frescos e selecionados do nosso próprio quintal, feita
              do lar para outro.
        </p>
      </div>
      <div className="productor-container">
        <div className="productor-left-container">
          <img className="productor-photo"
          src="https://diarural.com.br/wp-content/uploads/2021/12/agricultura-9.jpg" alt={props.name}/><br />
          <button className="productor-button">
            <span className="productor-button-text">Visite o Perfil de {props.name}</span>
          </button>
        </div>
        <div className="productor-right-container">
          <p>Feito com amor e carinho por:</p>
          <h2 className="productor-name">{props.name}</h2>
          <p className="productor-description">
           Ama passar tempo com seus filhos e adora seu trabalho como produtora rural,
           seu sonho é que seus dois filhos entrem para faculdade. Maria Eunice vende
           seus produtos pela plataforma Meu Produtor desde 2022!
          </p>
        </div>
      </div>
    </div>
  );
}
