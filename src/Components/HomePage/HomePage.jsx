import React from "react";
import "./HomePage.css";
import twitter from "file:///C:/Users/User/Desktop/soloHackaton/Hackathon-Team-Project/src/Components/HomePage/img/twitter-svgrepo-com.svg";
import facebook from "file:///C:/Users/User/Desktop/soloHackaton/Hackathon-Team-Project/src/Components/HomePage/img/facebook-svgrepo-com.svg";
import instagram from "file:///C:/Users/User/Desktop/soloHackaton/Hackathon-Team-Project/src/Components/HomePage/img/instagram-svgrepo-com.svg";
import google from "file:///C:/Users/User/Desktop/soloHackaton/Hackathon-Team-Project/src/Components/HomePage/img/google-plus-svgrepo-com.svg";
import telegram from "file:///C:/Users/User/Desktop/soloHackaton/Hackathon-Team-Project/src/Components/HomePage/img/telegram-svgrepo-com.svg";

const HomePage = () => {
  return (
    <>
      <header>
        <div className="about-person">
          <div className="about-person-size">
            <div className="about-person-inside">
              <div className="flag">
                <img
                  src="https://militaryarms.ru/wp-content/uploads/2021/08/avca1ebc0dc3c66cf5bb0.jpeg"
                  alt="flag"
                />
              </div>
              <h2>Мы Reise.kg</h2>
              <h3>Официальные представители работы в Германию</h3>
              <div className="media-link">
                <a href="#">
                  <img src={twitter} alt="#" />
                </a>
                <a href="#">
                  <img src={facebook} alt="#" />
                </a>
                <a href="#">
                  <img src={instagram} alt="#" />
                </a>
                <a href="#">
                  <img src={google} alt="#" />
                </a>
                <a href="#">
                  <img src={telegram} alt="#" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <section className="start-container">
        <div className="start-container-general">
          <div className="main-content">
            <div>
              <h2>О НАС</h2>
              <h1>Привет, мы компания Rise.kg</h1>
              <h3>
                На протяжении 10 лет мы предоставляем весь комплекс
                консультационных услуг по организации образования за рубежом
                более чем в 30 странах мира. Наша миссия – помочь молодым людям
                получить качественное образование с максимальной ценностью,
                учитывая все Ваши желания и возможности. Нашим приоритетом
                является индивидуальный подход к каждому студенту! Нашей задачей
                является оказание полной информационной и административной
                поддержки, на всех стадиях выбора, оформления программы и в
                процессе обучения. Наши сотрудники – высококвалифицированные
                профессионалы, болеющие своим делом, которые ежегодно посещают
                образовательные тренинги по всему миру (ICEF, Study World,
                Alpha), участвуют в конференциях и лично выезжают с
                ознакомительными визитами в учебные заведения. Сегодня у многих
                из тех, кто намерен поступать в зарубежный вуз, возникает
                стремление самостоятельно пройти весь процесс, основываясь на
                информации, полученной из Интернета. Другие обращаются за
                помощью в специализированное образовательное агентство. Какие
                плюсы есть у второго пути? Или скажем иначе, какие плюсы, если
                Вы обратитесь к НАМ! Почему выбирают НАС
              </h3>
              <h4>
                --------------------------------------------------------------
                <br />
                <img
                  src="http://static1.squarespace.com/static/60b06a022f97882d989feadc/t/60b97dc2a0940d6784f2bea6/1622769093140/RISE+LOGO+BLK.png?format=1500w"
                  alt="logo"
                  width="50%"
                  height="50%"
                />
              </h4>
            </div>
          </div>
          <div className="main-info">
            <div className="main-info-name">Базовая информация</div>
            <div className="main-info-2_2">
              <div className="main-info-part-1">
                <h2>Адресс:</h2>
                <h2>Дата создания:</h2>

                <h2>Языки</h2>
                <h2>Кто мы</h2>
              </div>
              <div className="main-info-part-2">
                <h3>Кыргызстан, Бишкек, ул.Душанбинксого</h3>
                <h3>1.01.2011</h3>

                <h3>Русский,Английски,Немецкий</h3>
                <h3>Крутая компания помогающая студентам попасть в Германию</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
