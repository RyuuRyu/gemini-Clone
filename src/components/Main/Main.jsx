import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import "./Main.css";
import { Context } from "../../context/context";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
    cardOnClick,
  } = useContext(Context);

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>

      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev</span>
              </p>
              <p>How can I help you today?</p>
            </div>

            <div className="cards">
              <div
                onClick={() =>
                  cardOnClick(
                    "Suggest a powerfull place to see on upcoming road trip"
                  )
                }
                className="card"
              >
                <p>Suggest a powerfull place to see on upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
              </div>

              <div
                onClick={() =>
                  cardOnClick("Briefly summarize this concept: Urban Planning")
                }
                className="card"
              >
                <p>Briefly summarize this concept: Urban Planning</p>
                <img src={assets.bulb_icon} alt="" />
              </div>

              <div
                onClick={() =>
                  cardOnClick(
                    "Brainstorm team bonding activities for our work retreat"
                  )
                }
                className="card"
              >
                <p>Brainstorm team bonding activities for our work retreat</p>
                <img src={assets.message_icon} alt="" />
              </div>

              <div
                onClick={() =>
                  cardOnClick("Improve the readibility of the following code")
                }
                className="card"
              >
                <p>Improve the readibility of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}

        <div className="main-bottom">
          <div className="search-box">
            <input
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  onSent();
                }
              }}
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter prompt here"
            />
            <div>
              <img src={assets.gallery_icon} alt="" />
              <img src={assets.mic_icon} alt="" />
              {input ? (
                <img onClick={() => onSent()} src={assets.send_icon} alt="" />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequatur, distinctio iusto eveniet quisquam maiores magni.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
