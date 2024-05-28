"use client"

import Image from "next/image";
import { useSelector } from "react-redux";


export default function Home() {
  const content = useSelector((state) => state.content.homepageContent);
  const { welcomeMessage, Features,herocontent,button1,button2,images,featuredArticles,Reliable,services,bannerlogo} = content;
  return (
    <main>
      <section className="bg mb-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <div class="px-4 py-5 my-5 text-center text-white">
              <Image className="d-block mx-auto mb-4" src={bannerlogo.logo} alt="" width="252" height="57"/>
              <h1 class="display-5 fw-bold text-white">
                {welcomeMessage}
              </h1>
              <div class="col-lg-6 mx-auto">
                <p class="lead mb-4">{herocontent}</p>
                <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                  <button
                    type="button"
                    class="btn btn-primary btn-lg px-4 gap-3"
                  >
                    {button1}
                  </button>
                  <button
                    type="button"
                    class="btn btn-outline-secondary btn-lg px-4"
                  >
                    {button2}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section>

      <div className="container">
      <div className='row'>
             {services.map (service => (
            <div key={service.id} className='col-sm-4'>
              <ul>
              <Image src={service.bannerimage} alt="alt" width={500} height={145}/>
          <li>
              <h3>{service.serviceheading}</h3>
              <p>{service.para}</p>
            </li>
        </ul>
        </div>
          ))}
            </div>
           
          </div>

      <div class="container px-4 py-5">
        <h2 class="pb-2 border-bottom">{Features}</h2>

        <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div class="col d-flex flex-column align-items-start gap-2">
            <h2 class="fw-bold text-body-emphasis">
              {Reliable}
            </h2>
            <p class="text-body-secondary">
            {herocontent}.
            </p>
            <a href="#" class="btn btn-secondary btn-lg">
              {button2}
            </a>
          </div>

          <div class="col">
            <div class="row ">
              <div class="col d-flex flex-column ">
              <ul>
          {featuredArticles.map(article => (
            <li key={article.id}>
              <h3>{article.title}</h3>
              <p>{article.summary}</p>
            </li>
          ))}
        </ul>
              </div>
              <div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
