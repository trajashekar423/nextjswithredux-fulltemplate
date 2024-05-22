"use client"

import Image from "next/image";
import { useSelector } from "react-redux";


export default function Home() {
  const content = useSelector((state) => state.content.homepageContent);
  const { welcomeMessage, Features,herocontent,button1,button2,images, } = content;
  return (
    <main>
      <div className="container">
        <div className="row">
          <div className="col">
            <div class="px-4 py-5 my-5 text-center">
              <Image
                class="d-block mx-auto mb-4"
                src="/landing_logo.png"
                alt=""
                width="152"
                height="57"
              />
              <h1 class="display-5 fw-bold text-body-emphasis">
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

      <div className="container">
        <div className="row">
          <div className="col-sm-6">
          {images.map((image) => (
            <Image
              key={image.id}
              src={image.url}
              alt="alt"
              width={400}
              height={300}
            />
          ))}
          </div>

          <div className="col">
          
          
         </div>
        </div>
      </div>

      <div class="container px-4 py-5">
        <h2 class="pb-2 border-bottom">{Features}</h2>

        <div class="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div class="col d-flex flex-column align-items-start gap-2">
            <h2 class="fw-bold text-body-emphasis">
              Left-aligned title explaining these awesome features
            </h2>
            <p class="text-body-secondary">
            {herocontent}.
            </p>
            <a href="#" class="btn btn-secondary btn-lg">
              {button2}
            </a>
          </div>

          <div class="col">
            <div class="row row-cols-1 row-cols-sm-2 g-4">
              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg class="bi" width="1em" height="1em"></svg>
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Featured title
                </h4>
                <p class="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg class="bi" width="1em" height="1em"></svg>
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Featured title
                </h4>
                <p class="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg class="bi" width="1em" height="1em"></svg>
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Featured title
                </h4>
                <p class="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>

              <div class="col d-flex flex-column gap-2">
                <div class="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3">
                  <svg class="bi" width="1em" height="1em"></svg>
                </div>
                <h4 class="fw-semibold mb-0 text-body-emphasis">
                  Featured title
                </h4>
                <p class="text-body-secondary">
                  Paragraph of text beneath the heading to explain the heading.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
