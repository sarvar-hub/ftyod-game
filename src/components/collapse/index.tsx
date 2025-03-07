import { mq } from "@/utils";
import styled from "@emotion/styled";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const CollapseWrapper = styled.div(({ theme }) => ({
  width: "100%",
  background: theme.palette.background.paper,
  display: "flex",
  flexDirection: "column",
}));

const Header = styled.div({
  cursor: "pointer",
  userSelect: "none",
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  flexDirection: "column",

  [mq("md")]: {
    flexDirection: "row",
    paddingRight: 24,
  },
});

const ContentWrapper = styled(motion.div)({
  color: "white",
  overflow: "hidden",
});

const Collapse = ({
  header,
  children,
}: {
  header: React.ReactNode;
  children: React.ReactNode;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <CollapseWrapper>
      <Header onClick={() => setIsOpen(!isOpen)}>
        {header}
        <motion.img
          src="/assets/icons/arrow-down.svg"
          alt="arrow"
          style={{
            padding: 10,
            cursor: "pointer",
          }}
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </Header>
      <AnimatePresence initial={false}>
        {isOpen && (
          <ContentWrapper
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
          >
            {children}
          </ContentWrapper>
        )}
      </AnimatePresence>
    </CollapseWrapper>
  );
};

export default Collapse;
