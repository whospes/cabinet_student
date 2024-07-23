import React, { useState } from "react";
import Calendar_modal from "../calendar/Calendar_modal";

const Book_icon = ({ event }: { event: any }) => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <div
      className="icon-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <svg
        id="computer_icon"
        xmlns="http://www.w3.org/2000/svg"
        width="50"
        height="50"
        viewBox="0 0 50 50"
        fill="none"
      >
        <g clip-path="url(#clip0_2065_311)">
          <path
            d="M1.0056 39.4119C1.0056 39.4119 2.82594 42.4802 0.458984 44.5532L25.6962 46.6159L26.2738 41.1137L1.0056 39.4119Z"
            fill="#E5E5E5"
          />
          <path
            d="M25.9953 44.5378C25.6807 44.2438 22.0142 40.7836 1.43359 40.3711C1.43359 40.3711 1.41812 39.8709 0.979797 39.3913L25.954 40.8249L25.9953 44.5378Z"
            fill="#CFCECC"
          />
          <path
            d="M25.8457 40.0153L41.9348 22.7814L42.3938 28.2424L25.9952 47.1316L25.8457 40.0153Z"
            fill="#FEC23C"
          />
          <path
            d="M0.623962 37.8906L25.8457 40.0152L41.9348 22.7813L19.3585 19.9399L0.623962 37.8906Z"
            fill="#E8A827"
          />
          <path
            d="M25.7529 43.3208C25.7735 43.1042 25.789 42.867 25.8148 42.604C25.9179 41.3302 24.9845 41.356 24.9845 41.356L0.505363 39.3552L0.623969 37.8907L25.3558 39.9121C25.8766 39.9534 26.2222 40.1493 26.4542 40.4175C26.4542 40.4175 26.4955 40.4639 26.5109 40.4897C26.5109 40.4897 26.5109 40.4897 26.5161 40.5C26.5264 40.5103 26.5367 40.5258 26.547 40.5413C26.9699 41.1034 28.5891 43.6405 26.2273 46.848C25.9643 47.2708 25.5105 47.606 24.7318 47.5441L0 45.5175L0.118606 44.053L24.5978 46.0538C24.5978 46.0538 25.5157 46.2343 25.6188 44.9606C25.6394 44.6976 25.6601 44.4552 25.6755 44.2438C25.6755 44.2438 25.7065 43.8777 25.7477 43.3208H25.7529Z"
            fill="#FEC23C"
          />
          <path
            d="M8.6118 31.4086C8.6118 31.4086 10.427 34.4769 8.06519 36.5499L33.3024 38.6126L33.88 33.1104L8.61696 31.4086H8.6118Z"
            fill="#E5E5E5"
          />
          <path
            d="M33.5963 36.5345C33.2818 36.2405 29.6205 32.7803 9.03467 32.3678C9.03467 32.3678 9.0192 31.8676 8.58087 31.388L33.5551 32.8216L33.5963 36.5345Z"
            fill="#CFCECC"
          />
          <path
            d="M33.4519 32.0068L49.541 14.7781L50 20.2391L33.5963 39.1283L33.4519 32.0068Z"
            fill="#24B1B6"
          />
          <path
            d="M8.23022 29.8874L33.452 32.0068L49.5411 14.7781L26.9648 11.9315L8.23022 29.8874Z"
            fill="#119998"
          />
          <path
            d="M33.3591 35.3123C33.3797 35.0957 33.3952 34.8585 33.4158 34.5955C33.519 33.3218 32.5856 33.3475 32.5856 33.3475L8.10644 31.3467L8.22504 29.8822L32.9569 31.9037C33.4777 31.9449 33.8232 32.1409 34.0553 32.4039C34.0553 32.4039 34.0965 32.4503 34.112 32.4761C34.112 32.4761 34.112 32.4761 34.1172 32.4812C34.1275 32.4967 34.1378 32.507 34.1481 32.5225C34.5761 33.0897 36.1902 35.6217 33.8284 38.8292C33.5602 39.252 33.1064 39.5872 32.3329 39.5254L7.60107 37.5039L7.71968 36.0394L32.1988 38.0402C32.1988 38.0402 33.1168 38.2207 33.2199 36.947C33.2405 36.684 33.2611 36.4468 33.2818 36.2302C33.2818 36.2302 33.3127 35.8641 33.354 35.3071L33.3591 35.3123Z"
            fill="#24B1B6"
          />
          <path
            d="M4.59981 21.7139C4.59981 21.7139 6.29123 24.8544 3.84692 26.8294L28.981 29.908L29.7803 24.4315L4.60497 21.7087L4.59981 21.7139Z"
            fill="#E5E5E5"
          />
          <path
            d="M29.3575 27.8453C29.0532 27.5359 25.5363 23.9313 4.98145 22.6885C4.98145 22.6885 4.98145 22.1883 4.56891 21.6932L29.4658 24.1324L29.3575 27.8453Z"
            fill="#CFCECC"
          />
          <path
            d="M29.3987 23.3228L46.1685 6.75415L46.4057 12.2306L29.2543 30.4392L29.3987 23.3228Z"
            fill="#64A343"
          />
          <path
            d="M4.28015 20.1823L29.3988 23.3228L46.1686 6.75413L23.7263 3L4.28015 20.1823Z"
            fill="#5C9140"
          />
          <path
            d="M29.1719 26.618C29.1976 26.4014 29.2286 26.1642 29.2595 25.9012C29.4142 24.6326 28.4808 24.6223 28.4808 24.6223L4.10482 21.6365L4.2853 20.1772L28.914 23.1939C29.4297 23.2558 29.77 23.4672 29.9866 23.7405C29.9866 23.7405 30.0227 23.7921 30.0382 23.8127C30.0382 23.8127 30.0382 23.8127 30.0433 23.823C30.0537 23.8333 30.064 23.8488 30.0743 23.8643C30.4765 24.447 31.9874 27.046 29.5019 30.1555C29.2183 30.5681 28.7542 30.8878 27.9806 30.7898L3.35193 27.7731L3.53242 26.3137L27.9084 29.2995C27.9084 29.2995 28.8212 29.5161 28.9759 28.2475C29.0068 27.9897 29.0378 27.7473 29.0636 27.5359C29.0636 27.5359 29.11 27.1698 29.177 26.618H29.1719Z"
            fill="#64A343"
          />
          <path
            d="M33.8284 38.8344C36.1902 35.6269 34.571 33.0897 34.1481 32.5277C34.1378 32.5122 34.1275 32.5019 34.1172 32.4864C34.1172 32.4864 34.1172 32.4813 34.112 32.4813C34.0914 32.4606 34.0759 32.4348 34.0553 32.4091C33.8284 32.1461 33.4777 31.9449 32.9569 31.9037L28.2797 31.5221V32.9969L32.5856 33.3476C32.5856 33.3476 33.519 33.3218 33.4159 34.5955C33.3952 34.8585 33.3746 35.0957 33.3591 35.3123C33.3127 35.8641 33.2869 36.2354 33.2869 36.2354C33.2663 36.452 33.2508 36.6892 33.2251 36.9522C33.1219 38.2259 32.204 38.0454 32.204 38.0454L28.2797 37.7257V39.2005L32.3329 39.5305C33.1065 39.5924 33.5603 39.2572 33.8284 38.8344Z"
            fill="#128481"
          />
          <path
            d="M26.2273 46.8377C28.5891 43.6302 26.9699 41.093 26.547 40.531C26.5367 40.5155 26.5264 40.5052 26.5161 40.4897C26.5161 40.4897 26.5161 40.4845 26.511 40.4845C26.4903 40.4588 26.4749 40.4381 26.4542 40.4124C26.2273 40.1494 25.8767 39.9482 25.3558 39.907L20.6786 39.5254V41.0002L24.9846 41.3509C24.9846 41.3509 25.9179 41.3251 25.8148 42.5988C25.7942 42.8618 25.7735 43.099 25.7581 43.3156C25.7117 43.8674 25.6859 44.2387 25.6859 44.2387C25.6652 44.4553 25.6498 44.6925 25.624 44.9555C25.5209 46.2292 24.6029 46.0487 24.6029 46.0487L20.6786 45.729V47.2038L24.7319 47.5338C25.5054 47.5957 25.9592 47.2605 26.2273 46.8377Z"
            fill="#FAA531"
          />
          <path
            d="M29.5638 30.1658C32.1215 27.0563 30.5539 24.4573 30.131 23.8746C30.1207 23.8591 30.1104 23.8488 30.1001 23.8333C30.1001 23.8333 30.1001 23.8281 30.0949 23.8281C30.0794 23.8024 30.0588 23.7817 30.0382 23.756C29.8113 23.4826 29.4606 23.2712 28.9243 23.2093L20.8901 22.2192L20.7148 23.6786L28.486 24.6378C28.486 24.6378 29.4555 24.6481 29.2956 25.9166C29.2647 26.1745 29.2337 26.4168 29.2079 26.6334C29.1409 27.1852 29.0945 27.5513 29.0945 27.5513C29.0687 27.7628 29.0378 28.0051 29.0068 28.2681C28.8521 29.5367 27.9084 29.3201 27.9084 29.3201L20.395 28.3919L20.2661 29.8564L27.9909 30.8104C28.7902 30.9032 29.2698 30.5835 29.5638 30.171V30.1658Z"
            fill="#51833C"
          />
          <path
            d="M50 20.2391L33.7046 39.0097L33.8799 36.2611L49.8401 18.3207L50 20.2391Z"
            fill="#128481"
          />
          <path
            d="M46.4057 12.2203L29.2543 30.4391L30.1104 27.3863L46.3335 10.4979L46.4057 12.2203Z"
            fill="#51833C"
          />
          <path
            d="M25.9901 47.0903L32.5856 39.5408L30.8478 39.4119L26.2015 44.5378L25.9901 47.0903Z"
            fill="#FAA531"
          />
        </g>
        <defs>
          <clipPath id="clip0_2065_311">
            <rect
              width="50"
              height="44.5441"
              fill="white"
              transform="translate(0 3)"
            />
          </clipPath>
        </defs>
      </svg>
      {hovered && (
        <div className="modal-wrapper">
          <Calendar_modal
            date={event.dataEventModal}
            nameEvent={event.nameEvent}
            timeStart={event.timeStart}
            timeEnd={event.timeEnd}
          />
        </div>
      )}
    </div>
  );
};

export default Book_icon;