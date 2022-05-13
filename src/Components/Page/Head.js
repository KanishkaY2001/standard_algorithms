import './Head.css';
import { useState } from "react";

const Head = (props) => {

  const [page, setPage] = useState("home");
  const [head_bar_fg, set_head_bar_fg] = useState({
    home: "head-bar-fg-items--high",
    about: "head-bar-fg-items--low",
    algorithms: "head-bar-fg-items--low",
    line: "head-bar-fg-items--Home",
  })

  const changePage = (e) => {

    // user clicked on the head
    let target = e.target;
    if (target.className.localeCompare("head-bar-fg-items") === 0) return;

    // user clicked on the currently picked page
    if (target.className.split("--")[1].localeCompare("low") !== 0) return;

    // select new option, change the format
    set_head_bar_fg({
      ...head_bar_fg,
      [page]: "head-bar-fg-items--low",
      [target.textContent.toLowerCase()]: target.parentNode.className + "--high",
      line: head_bar_fg.line.split("--")[0] + "--" + target.textContent
    }, setPage(
      target.textContent.toLowerCase()
    ));

    /**
     * CHANGE PAGE: {need to scroll down in the page}
     */
  }

  const loadSocials = (e) => {
    let target = e.target;
    if (target.firstChild !== null) target = target.firstChild;
    window.open(target.getAttribute("link"), '_blank');
  }

  return (
    <header className="head">

      <div className="head-title">
        <h1>Programming Algorithms</h1>
        <h2>Kanishka Yamani</h2>
      </div>

      <div className="head-bar">
        <div className="head-bar-fg">

          <div className="head-bar-fg-items" onClick={(e) => changePage(e)}>
            <h3 className={head_bar_fg.home}>Home</h3>
            <h3 className={head_bar_fg.about}>About</h3>
            <h3 className={head_bar_fg.algorithms}>Algorithms</h3>
            <hr className={head_bar_fg.line}/>
          </div>
          
          <div className="head-bar-fg-icons" onClick={(e) => loadSocials(e)}>

            <svg>
              <path link={props.socials.linkedin}
              d="M9.429 8.969h3.714v1.85c.535-1.064 1.907-2.02 3.968-2.02c3.951 0 4.889 2.118 4.889 6.004V22h-4v-6.312c0-2.213-.535-3.461-1.897-3.461c-1.889 0-2.674 1.345-2.674 3.46V22h-4V8.969ZM2.57 21.83h4V8.799h-4V21.83ZM7.143 4.55a2.53 2.53 0 0 1-.753 1.802a2.573 2.573 0 0 1-1.82.748a2.59 2.59 0 0 1-1.818-.747A2.548 2.548 0 0 1 2 4.55c0-.677.27-1.325.753-1.803A2.583 2.583 0 0 1 4.571 2c.682 0 1.336.269 1.819.747c.482.478.753 1.126.753 1.803Z"/>
            </svg>

            <svg>
              <path link={props.socials.github}
              d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385c.6.105.825-.255.825-.57c0-.285-.015-1.23-.015-2.235c-3.015.555-3.795-.735-4.035-1.41c-.135-.345-.72-1.41-1.23-1.695c-.42-.225-1.02-.78-.015-.795c.945-.015 1.62.87 1.845 1.23c1.08 1.815 2.805 1.305 3.495.99c.105-.78.42-1.305.765-1.605c-2.67-.3-5.46-1.335-5.46-5.925c0-1.305.465-2.385 1.23-3.225c-.12-.3-.54-1.53.12-3.18c0 0 1.005-.315 3.3 1.23c.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23c.66 1.65.24 2.88.12 3.18c.765.84 1.23 1.905 1.23 3.225c0 4.605-2.805 5.625-5.475 5.925c.435.375.81 1.095.81 2.22c0 1.605-.015 2.895-.015 3.3c0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z"/>
            </svg>

          </div>

        </div>
      </div>

    </header>
  );
};

export default Head;