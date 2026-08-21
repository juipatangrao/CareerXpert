import React from "react";
import "../style/MediaJournalism.css";
import { Link } from "react-router-dom";

import Journalist from "../assets/Journalists.png";
import NewsReporter from "../assets/News-Reporter.png";
import NewsAnchor from "../assets/News-Anchor.png";
import RadioJockey from "../assets/Radio-Jockey.png";
import mediahero from "../assets/media-hero.png";
function MediaJournalism() {
  const careers = [
    {
      id: "journalist",
      title: "Journalist",
      icon: Journalist,
      description:
        "Journalists gather, verify and report news to keep the public informed.",
    },
    {
      id: "news-reporter",
      title: "News Reporter",
      icon: NewsReporter,
      description:
        "News reporters cover current events, conduct interviews and deliver accurate news stories.",
    },
    {
      id: "news-anchor",
      title: "News Anchor",
      icon: NewsAnchor,
      description:
        "News anchors present news on television, conduct discussions and communicate important information.",
    },
    {
      id: "radio-jockey",
      title: "Radio Jockey (RJ)",
      icon: RadioJockey,
      description:
        "Radio jockeys entertain listeners through music, interviews, discussions and live radio shows.",
    },
  ];

  return (
    <div className="media-page">

      {/* ================= HEADER ================= */}

      <header className="media-page-header">

        <Link to="/home" className="media-back-btn">
          Back
        </Link>

        <h2>Media & Journalism</h2>

        <button className="media-wishlist-btn">
          Wishlist ❤️
        </button>

      </header>


      {/* ================= HERO SECTION ================= */}

      <section className="media-hero-section">

        <div className="media-hero-left">

          <h1>Media & Journalism</h1>

          <p>
            Explore exciting careers in media, journalism and broadcasting
            where you can inform, inspire and connect with people.
          </p>

          <button>
            Start Exploring
          </button>

        </div>


        <div className="media-hero-right">
          <img
                      src={mediahero}
                      alt="Media & Journalism Careers"
                    />
          
        </div>

      </section>


      {/* ================= CAREER SECTION ================= */}

      <section className="media-career-section">

        <h2>Explore Media Careers</h2>

        <p>
          Click on any field to view complete details about that career.
        </p>


        <div className="media-career-grid">

          {careers.map((career) => (

            <div
              className="media-career-card"
              key={career.id}
            >

              {/* Career Image */}

              <div className="media-career-icon">

                <img
                  src={career.icon}
                  alt={career.title}
                />

              </div>


              {/* Career Title */}

              <h3>
                {career.title}
              </h3>


              {/* Career Description */}

              <p>
                {career.description}
              </p>


              {/* Career Details Link */}

              <Link
                to={`/media-and-journalism/${career.id}`}
                className="media-career-link"
              >

                <button>
                  Explore Career →
                </button>

              </Link>

            </div>

          ))}

        </div>

      </section>


      {/* ================= WHY CHOOSE SECTION ================= */}

      <section className="media-why-section">

        <h2>
          Why Choose Media & Journalism?
        </h2>


        <div className="media-why-grid">


          {/* Card 1 */}

          <div className="media-why-card">

            <span>📰</span>

            <h3>
              Inform Society
            </h3>

            <p>
              Deliver accurate news and information to the public.
            </p>

          </div>


          {/* Card 2 */}

          <div className="media-why-card">

            <span>🎤</span>

            <h3>
              Communication
            </h3>

            <p>
              Develop excellent speaking and presentation skills.
            </p>

          </div>


          {/* Card 3 */}

          <div className="media-why-card">

            <span>🌍</span>

            <h3>
              Dynamic Career
            </h3>

            <p>
              Cover national and international events.
            </p>

          </div>


          {/* Card 4 */}

          <div className="media-why-card">

            <span>📺</span>

            <h3>
              Creative Work
            </h3>

            <p>
              Work in television, radio, newspapers and digital media.
            </p>

          </div>


          {/* Card 5 */}

          <div className="media-why-card">

            <span>📈</span>

            <h3>
              Career Growth
            </h3>

            <p>
              Excellent opportunities across media industries.
            </p>

          </div>


        </div>

      </section>

    </div>
  );
}

export default MediaJournalism;