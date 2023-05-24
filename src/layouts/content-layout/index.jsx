import PropTypes from "prop-types";

const ContentLayout = ({ children }) => {
  return (
    <section className="w-full px-10 md:px-0 md:w-[450px] flex flex-col h-full gap-y-8  pt-28 md:gap-y-6 ">
      {children}
    </section>
  );
};

ContentLayout.propTypes = { children: PropTypes.node.isRequired };
export default ContentLayout;
