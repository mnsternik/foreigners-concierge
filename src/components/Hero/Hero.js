import { useTranslation } from "react-i18next";

const Hero = (props) => {
    const { t } = useTranslation();
    
    return (
        <div class="bg-dark text-secondary px-4 py-5 text-center">
            <div class="py-5">
                <h1 class="display-5 fw-bold text-white">{t('heroSection.header')}</h1>
                <div class="col-lg-6 mx-auto">
                    <p class="fs-5 mb-4">{t('heroSection.subHeader')}</p>
                    <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button type="button" class="btn btn-outline-light btn-lg px-4" onClick={(props.handleScroll)}>{t('heroSection.button')}</button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Hero; 