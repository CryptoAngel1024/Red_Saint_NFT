import styled from 'styled-components'

export const Container = styled.div<any>`
  .main-timeline {
    font-family: 'Poppins', sans-serif;
    color: white;

    &:after {
      content: '';
      display: block;
      clear: both;
    }

    .timeline:nth-child(odd) {
      width: calc(50% + 58px);
      border-top: 5px solid #a80000;
      float: left;
      position: relative;
      z-index: 1;

      @media screen and (max-width: 768px) {
        width: calc(80% + 58px);
      }

      a {
        text-decoration: none;
      }

      &:before {
        content: '';
        background: #a80000;
        width: 16px;
        height: 16px;
        border-radius: 50px;
        position: absolute;
        top: -10px;
        right: 0;
      }
    }

    .timeline:nth-child(even) {
      width: calc(50% + 58px);
      border-top: 5px solid white;
      float: left;
      position: relative;
      z-index: 1;

      @media screen and (max-width: 768px) {
        width: calc(80% + 58px);
      }

      a {
        text-decoration: none;
      }

      &:before {
        content: '';
        background: yellow;
        width: 16px;
        height: 16px;
        border-radius: 50px;
        position: absolute;
        top: -10px;
        right: 0;
      }
    }

    .timeline-content {
      color: white;
      text-align: center;
      padding: 15px 80px 15px 10px;
      display: block;
      position: relative;

      &:hover {
        text-decoration: none;
      }

      &:before {
        content: '';
        background: green;
        width: 15px;
        height: 100%;
        position: absolute;
        top: 0;
        right: 50px;
      }
    }

    .timeline-year {
      font-size: 35px;
      line-height: 35px;
      font-weight: 700;
      transform: translateY(-50%) rotate(90deg);
      position: absolute;
      top: 50%;
      right: -15px;
    }

    .title {
      font-size: 22px;
      font-weight: 600;
      letter-spacing: 0.5px;
      text-transform: uppercase;
      margin: 0 0 8px;
    }

    .description {
      font-size: 16px;
      margin: 0;
    }

    .timeline {
      &:nth-child(even) {
        float: right;

        &:before {
          right: auto;
          left: 0;
        }

        .timeline-content {
          padding: 15px 10px 15px 80px;

          &:before {
            right: auto;
            left: 51px;
          }
        }

        .timeline-year {
          right: auto;
          left: -15px;
        }
      }

      &:nth-child(4n + 2) .timeline-content:before {
        background: blue;
      }

      &:nth-child(4n + 3) .timeline-content:before {
        background: yellow;
      }

      &:nth-child(4n + 4) .timeline-content:before {
        background: green;
      }
    }
  }

  @media screen and (max-width: 767px) {
    .main-timeline .timeline {
      width: 100%;
    }
  }
  .max-input {
    max-width: 34% !important;
  }
  .big-button {
    display: block;
    width: 50%;
    background-color: orange;
    border: none;
    color: #fff;
    // box-shadow: 5px 10px #000;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;

    font-size: 16px;
    padding: 14px 28px;
  }
  .big-button-in {
    display: block;
    width: 50%;
    background-color: orange;
    border: none;
    color: #fff;
    // box-shadow: 5px 10px #000;
    border-radius: 10px;
    cursor: pointer;
    font-weight: bold;
    font-size: 16px;
    padding: 14px 28px;
  }
  @media (max-width: 492px) {
    .big-button-in {
      display: block;
      width: auto;
      background-color: orange;
      border: none;
      color: #fff;
      // box-shadow: 5px 10px #000;
      border-radius: 10px;
      cursor: pointer;
      font-weight: bold;
      font-size: 16px;
      padding: 14px 28px;
    }
  }
`
