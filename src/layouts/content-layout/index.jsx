import PropTypes from "prop-types";

const ContentLayout = ({ children }) => {
  return (
    <section className="w-full px-9 md:w-[450px] flex flex-col h-full  pt-28 gap-y-6 ">
      {children}
    </section>
  );
};

ContentLayout.propTypes = { children: PropTypes.node.isRequired };
export default ContentLayout;
