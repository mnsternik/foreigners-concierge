import { useTranslation } from "react-i18next";

const Hero = (props) => {
    const { t } = useTranslation();
    
    return (
        <div className="bg-dark text-secondary px-4 py-5 text-center">
            <div className="py-5">
                <h1 className="display-5 fw-bold text-white">{t('heroSection.header')}</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mb-4">{t('heroSection.subHeader')}</p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" className="btn btn-outline-light btn-lg px-4" onClick={(props.handleScroll)}>{t('heroSection.button')}</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero; 