import banner from "./img/Banner-desktop.png";
import dehaze from "./img/dehaze-24px.png";
import shoppingCart from "./img/shopping_cart_24dp_3F5D45_FILL0_wght400_GRAD0_opsz24.png";
import logoSm from "./img/logotype-sm-dark.svg";
import imgDark from "./img/logo-all-dark.svg";
import titleWhytodoSm from "./img/title-whytodo-sm.svg";
import titleWhytodoLg from "./img/title-whytodo-lg.svg";
import pancake from "./img/photo-1519730722595-a5ff788dea4d.avif";
import WhyToEatSm from "./img/title-whytoeat-sm.svg";
import WhyToEatLg from "./img/title-whytoeat-lg.svg";
import Title02 from "./img/title-noneeded-sm02.svg";
import TitleLg from "./img/title-noneeded-lg.svg";
import P2 from "./img/p-2.png";
import P5 from "./img/p-5.png";
import P1 from "./img/p-1.png";
import logoLight from "./img/logo-light.svg";
import mail from "./img/mail-24px.png";
import arrow from "./img/arrow_forward-24px.png";
function App() {
  return (
    <div className="wrapper font-pingfang font-normal">
      <header className="header pt-[30px]">
        <div className="container max-w-full px-[30px] md:max-w-[940px] m-auto">
          <div className="md:hidden flex justify-between">
            <a className="block" href="#">
              <img src={dehaze} alt="burger" />
            </a>
            <a className="block" href="#">
              <img
                className="w-[114.14px] h-[17.14px]"
                src={logoSm}
                alt="logo-sm"
              />
            </a>
            <a className="block" href="#">
              <img
                className="w-[24px] h-[24px]"
                src={shoppingCart}
                alt="cart-sm"
              />
            </a>
          </div>

          <nav className="flex justify-between">
            <div className="nav-logo hidden md:h-[40px] md:w-[219.49px] md:flex">
              <img src={imgDark} alt="logo" />
            </div>
            <div className="nav-list text-base flex lg:flex">
              <ul className="no-underline hidden md:flex text-[#3F5D45] font-semibold gap-[60px]">
                <li>
                  <a href="#">首頁</a>
                </li>
                <li>
                  <a href="#">甜點</a>
                </li>
                <li>
                  <a href="#">登入</a>
                </li>
              </ul>
              <div className="nav-cart hidden md:w-[24px] md:h-[24px] md:ml-[79px] md:flex">
                <a href="#">
                  <img src={shoppingCart} alt="cart" />
                </a>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <section className="banner mt-[33.26px] md:mt-[36.5px]">
        <div className="container md:max-w-[940px] m-auto">
          <img
            className="w-full h-[277px] md:w-[940px] md:h-[496px]"
            src={banner}
            alt="banner"
          />
        </div>
        <div className="feature font-light mt-[-70px] flex justify-center opacity-80 text-center text-xl md:text-2xl">
          <div className="w-full h-[180px] md:w-[259.67px] md:[256px] bg-secondary text-primary flex items-center justify-center">
            <a className="[writing-mode:vertical-rl]" href="#">
              本日精選
            </a>
          </div>
          <div className="w-full h-[180px] md:w-[259.67px] md:[256px] bg-primary text-white flex items-center justify-center">
            <a className="[writing-mode:vertical-rl]" href="#">
              人氣推薦
            </a>
          </div>
          <div className="w-full h-[180px] md:w-[259.67px] md:[256px] bg-primary text-white flex items-center justify-center">
            <a className="[writing-mode:vertical-rl]" href="#">
              新品上市
            </a>
          </div>
        </div>
      </section>

      <section className="item-section font-semibold text-primary text-2xl md:flex md:flex-row md:mt-[80px]">
        <div>
          <img
            className="block md:hidden mx-auto max-w-[196px] mt-[30px]"
            src={titleWhytodoSm}
            alt="whytodosm"
          />
        </div>
        <div className="item-outside bg-[#EAF0ED] w-full md:h-[420px]">
          <div className="item-outside-container md:max-w-[940px] md:max-h-[420px] mx-auto md:flex mt-[30px] md:mt-0">
            <img
              className="hidden md:block md:order-3 md:mt-[-150px] mx-auto max-w-[90px]"
              src={titleWhytodoLg}
              alt="whytodosm"
            />

            <img
              className="item-media w-full h-[250px] object-cover md:order-1 md:mt-[-20px] md:mb-[-30px] md:w-1/2 md:h-[460px]"
              src={pancake}
              alt="pancake"
            />
            <div className="item-info md:order-2">
              <div className="item-cotainer font-base font-light leading-8 p-[30px] text-[#8DA291] md:[writing-mode:vertical-rl] md:[text-orientation:upright] md:pr-[80px] md:leading-8 md:py-16 md:px-0 md:max-h-[420px]">
                <p className="mb-[60px] md:mb-0 md:[margin-block-end:60px]">
                  青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
                </p>
                <p className="md:pl-14">
                  是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="item-section font-semibold text-primary text-2xl md:flex md:flex-row md:mt-[80px]">
        <div>
          <img
            className="block md:hidden mx-auto max-w-[196px] mt-[30px]"
            src={WhyToEatSm}
            alt="whytoeatsm"
          />
        </div>
        <div className="item-outside bg-[#EAF0ED] w-full md:h-[420px]">
          <div className="item-outside-container md:max-w-[940px] md:max-h-[420px] mx-auto md:flex mt-[30px] md:mt-0">
            <img
              className="item-leading-second hidden md:block md:order-2 md:mt-[-160px] md:pr-[42px] mx-auto max-w-[130px]"
              src={WhyToEatLg}
              alt="whytoeat"
            />
            <img
              className="item-media w-full h-[250px] object-cover md:order-3 md:mt-[-20px] md:mb-[-30px] md:w-1/2 md:h-[460px]"
              src={pancake}
              alt="pancake"
            />
            <div className="item-info md:order-1">
              <div className="item-cotainer font-base font-light leading-8 p-[30px] text-[#8DA291] md:[writing-mode:vertical-rl] md:[text-orientation:upright] md:pr-[80px] md:leading-8 md:py-16 md:px-0 md:max-h-[420px]">
                <p className="mb-[60px] md:mb-0 md:[margin-block-end:60px]">
                  青山依舊在，幾度夕陽紅。慣看秋月春風。一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。
                </p>
                <p className="md:pl-14">
                  是非成敗轉頭空，青山依舊在，幾度夕陽紅。白髮漁樵江渚上，古今多少事，都付笑談中。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="product-section mb-[30px] md:mb-[60px]">
        <div className="product-container mt-[30px] md:mt-[80px] mb-[30px] md:mb-[60px] px-[30px] md:px-[42px] m-auto">
          <img
            className="block mx-auto max-w-[226px] mb-[30px] md:hidden"
            src={Title02}
            alt="noneedsm"
          />
          <img
            className="hidden md:block md:max-w-[90px] md:mx-auto md:py-[80px]"
            src={TitleLg}
            alt="noneedlg"
          />
          <article className="product-items mx-auto">
            <ul className="product-list md:gap-[20px] flex justify-center">
              <li className="max-w-[315px]">
                <a href="https://goolge.com">
                  <img className="max-w-[315px] block" src={P2} alt="cart-1" />
                </a>

                <div className="item-border flex text-center border-solid border-[1px] border-[#EAF0ED]">
                  <p className="product-name border-[#EAF0ED] border-solid border-r-[1px] py-[14px] font-light text-xl leading-[1.5] flex-1">
                    焦糖馬卡龍
                  </p>
                  <p className="product-price font-semibold text-xl leading-[1.5] py-[13px] flex-1">
                    NT$450
                  </p>
                </div>

                <a
                  className="product-btn block bg-[#EAF0ED] text-center py-[16px] font-semibold text-2xl"
                  href="https://google.com"
                >
                  加入購物車
                </a>
              </li>

              <li className="max-w-[315px] hidden md:block">
                <a href="https://goolge.com">
                  <img className="max-w-[315px] block" src={P5} alt="cart-1" />
                </a>

                <div className="item-border flex text-center border-solid border-[1px] border-[#EAF0ED]">
                  <p className="product-name border-[#EAF0ED] border-solid border-r-[1px] py-[14px] font-light text-xl leading-[1.5] flex-1">
                    焦糖馬卡龍
                  </p>
                  <p className="product-price font-semibold text-xl leading-[1.5] py-[13px] flex-1">
                    NT$450
                  </p>
                </div>

                <a
                  className="product-btn block bg-[#EAF0ED] text-center py-[16px] font-semibold text-2xl"
                  href="https://google.com"
                >
                  加入購物車
                </a>
              </li>

              <li className="max-w-[315px] hidden md:block">
                <a href="https://goolge.com">
                  <img className="max-w-[315px] block" src={P1} alt="cart-1" />
                </a>

                <div className="item-border flex text-center border-solid border-[1px] border-[#EAF0ED]">
                  <p className="product-name border-[#EAF0ED] border-solid border-r-[1px] py-[14px] font-light text-xl leading-[1.5] flex-1">
                    焦糖馬卡龍
                  </p>
                  <p className="product-price font-semibold text-xl leading-[1.5] py-[13px] flex-1">
                    NT$450
                  </p>
                </div>

                <a
                  className="product-btn block bg-[#EAF0ED] text-center py-[16px] font-semibold text-2xl"
                  href="https://google.com"
                >
                  加入購物車
                </a>
              </li>
            </ul>
          </article>
        </div>
      </section>

      <footer>
        <address className="address bg-[#3F5D45] py-[30px] md:py-[30px]">
          <div className="address-container md:flex max-w-[940px] mx-auto">
            <div className="footer-logo flex flex-1 justify-center md:justify-start gap-[20px] items-center mb-[30px] md:mb-[0px]">
              <img
                className="block w-[40px]"
                src={logoLight}
                alt="footer-logo"
              />
              <p className="not-italic font-normal text-2xl text-[#EAF0ED]">
                訂閱你我的甜蜜郵件
              </p>
            </div>
            <div className="mail-section flex flex-1 justify-center md:justify-end">
              <div className="mail-container w-[251px] md:w-[316px] bg-[#EAF0ED]">
                <img
                  className="mail block py-[16px] pl-[20px]"
                  src={mail}
                  alt="mail"
                />
              </div>
              <div className="mail-btn w-[64px] bg-[#FFE180]">
                <img
                  className="block w-[24px] mx-auto py-[20px]"
                  src={arrow}
                  alt="arrow"
                />
              </div>
            </div>
          </div>
        </address>
      </footer>
    </div>
  );
}

export default App;
