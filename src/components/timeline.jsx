import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Senior Software Engineering Manager at Capital One <span>June 2022-present</span></h2>
                        <ol style={{ listStyleType: 'lower-alpha' }}>
                          <li>Managing 3 agile teams of 15 highly skilled Software Engineers with varied technical and functional horizons.</li>
                          <li>Strategic decision making for future growth of the team.</li>
                          <li>Interacting with multiple ASV (Approved Scanning Vendors) for onboarding and accessing security risks.</li>
                          <li>Creating technical operational roadmap for the teams</li>
                        </ol>
                        <p>I recently joined the Capital One and it is really an amazing experience till now. On one hand I am working with amazing people around and on the other hand
                        getting involved with some of the very challenging technical projects.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer, Manager at Apple (through TCS)<span>2017-2022</span></h2>
                        <ol style={{ listStyleType: 'lower-alpha' }}>
                          <li>Managed a team of 10 highly skilled Software Engineers with complex architectural requirements.</li>
                          <li>Managed, designed and developed the financing of non-iPhone items in the Apple Retail Store.</li>
                          <li>Designed and developed Microservices from existing Monolithic applications for different components.</li>
                          <li>Lead the feature - ‘Recycling’ of iPhones in Retail Stores.</li>
                          <li>Built a new team in Austin, Texas from scratch.</li>
                        </ol>
                        <p>I have been involved in many time sensitive and crucial projects while working at Apple. With the launch of every new feature, we impacted millions of people how they buy their next Apple products. And being a part of many of those makes me feel proud.</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Technical Lead at Apple (through TCS)<span>2014-2017</span></h2>
                        <ol style={{ listStyleType: 'lower-alpha' }}>
                          <li>Lead multiple successful complex backend projects with diverse cross-functional requirements.</li>
                          <li>Created SPLUNK dashboard for important production releases and New Product Launches.</li>
                          <li>From conceptualization to implementation of monthly financing of iPhone in Apple Retail store.</li>
                          <li>Worked in the recently migrated AWS environment.</li>
                        </ol>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Developer at Apple (through TCS)<span>2010-2014</span></h2>
                        <ol style={{ listStyleType: 'lower-alpha' }}>
                          <li>Worked extensively with mobile carriers like AT&T and Verizon to implement their financing in Apple Retail Stores.</li>
                          <li>Developed many UI based tools to help associates in Apple Retails stores to compare different ways to buy a specific item.</li>
                          <li>Developed many components for the integration of Apple Online Store and Apple Point of Sale – BOPIS (Buy Online Purchase In Store). </li>
                          <li>Worked on the Apple On boarding Systems and in the web service implementations.</li>
                        </ol>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Education <span>2006-2010</span></h2>
                        <p>I have completed my graduation in Information and Technology with 86% marks</p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
