import { useTranslation } from "react-i18next";

import { Link } from "react-router-dom";

import classes from "./About.module.css";

const About = (props) => {
    const { t } = useTranslation();

    return (
        <section id="about" className={classes.about} ref={props.targetRef}>
            <div className="container px-4 pt-5" id="featured-3">
                <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-primary bg-gradient fs-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-award-fill" viewBox="0 0 16 16">
                                <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                            </svg>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">{t('aboutSection.professionalism.title')}</h3>
                        <p>{t('aboutSection.professionalism.description')}</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-primary bg-gradient fs-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-person-workspace" viewBox="0 0 16 16">
                                <path d="M4 16s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-5.95a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5" />
                                <path d="M2 1a2 2 0 0 0-2 2v9.5A1.5 1.5 0 0 0 1.5 14h.653a5.4 5.4 0 0 1 1.066-2H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v9h-2.219c.554.654.89 1.373 1.066 2h.653a1.5 1.5 0 0 0 1.5-1.5V3a2 2 0 0 0-2-2z" />
                            </svg>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">{t('aboutSection.experience.title')}</h3>
                        <p>{t('aboutSection.experience.description')}</p>
                    </div>
                    <div className="feature col">
                        <div className="feature-icon d-inline-flex align-items-center justify-content-center text-primary bg-gradient fs-2 mb-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" className="bi bi-person-arms-up" viewBox="0 0 16 16">
                                <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                                <path d="m5.93 6.704-.846 8.451a.768.768 0 0 0 1.523.203l.81-4.865a.59.59 0 0 1 1.165 0l.81 4.865a.768.768 0 0 0 1.523-.203l-.845-8.451A1.5 1.5 0 0 1 10.5 5.5L13 2.284a.796.796 0 0 0-1.239-.998L9.634 3.84a.7.7 0 0 1-.33.235c-.23.074-.665.176-1.304.176-.64 0-1.074-.102-1.305-.176a.7.7 0 0 1-.329-.235L4.239 1.286a.796.796 0 0 0-1.24.998l2.5 3.216c.317.316.475.758.43 1.204Z" />
                            </svg>
                        </div>
                        <h3 className="fs-2 text-body-emphasis">{t('aboutSection.individualApproach.title')}</h3>
                        <p>{t('aboutSection.individualApproach.description')}</p>
                    </div>
                </div>
            </div>
            <div className="px-4 pb-2 text-center mb-3">
                <div className="col-lg-6 mx-auto">
                    <p className="h5 mb-4" style={{ fontWeight: '400' }}>{t('aboutSection.bottomText.support')}</p>
                    <p className="h5 mb-4" style={{ fontWeight: '400' }}>{t('aboutSection.bottomText.offer')}</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                        <Link to="/foreigners">
                            <button type="button" className="btn btn-primary btn-lg px-4 me-sm-3">{t('aboutSection.bottomText.individualsBtn')}</button>
                        </Link>
                        <Link to="/companies">
                            <button type="button" className="btn btn-outline-secondary btn-lg px-4">{t('aboutSection.bottomText.companiesBtn')}</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About; 