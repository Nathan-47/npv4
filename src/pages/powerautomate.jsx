import automateImg from '../images/blogs/automate_screenshot.png'

export default function PowerAutomate() {
    return (
        <div className="bg-white">
            <h1 className="blog-heading !mt-12 !mb-12">Power Automate to the world</h1>

            <p className="blog-body text-white !mb-4">Just a small simple one for my first blog.</p>

            <p className="blog-body text-white !mb-4">
                Power Automate is a great tool that allows users to optimise and automate workflows using Microsoft products for time consuming tasks. 
            </p>
            
            <p className="blog-body text-white !mb-4">
                As a test, I created my first Power Automate flow for a feedback form on our website. The form captures user input about any bugs or UI issues found on the site/page and stores it in a MS Form to provide a clean UI for managing responses. 
                Once a response is submitted, I receive an email indicating that the feedback form has been completed. The submitted data is then automatically inserted into a MS SharePoint list.
                <br /><br />
                While simple yes, this approach prevents my inbox from being cluttered with raw form data and returns feedback in a structured location.
            </p>

            <img className="!mb-10 !mt-10 !m-auto" src={automateImg} alt="screenshot showing my automation flow for website feedback form" />
            <figcaption className="text-sm text-grey-200 italic text-gray-400 text-center mt-0 !mb-12">Automation flow for BCUSU website feedback form</figcaption>

            <p className="blog-body text-white !mb-30">
                Future uses?
                <br /><br />
                When I get more familiar with Power Automation I will look to add AI into my flows. 
                <br /><br />
                I will look next to use flows for Login Help and Elections to help with instant feedback and to rectify any issues that show on pages.
            </p>
        </div>
    )
}