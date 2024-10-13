/* eslint-disable react/prop-types */

const SectionTitle = ({ heading, subHeading }) => {
    return (

        <div className="mx-auto md:w-4/12 my-5 text-center ">
            <p className="text-yellow-400 mb-2">--{subHeading}--</p>

            <p className="text-2xl uppercase border-y-4 pb-2">{heading} </p>
        </div>

    );
};

export default SectionTitle;