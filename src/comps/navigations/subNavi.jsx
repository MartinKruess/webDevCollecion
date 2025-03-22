import { motion } from "framer-motion";
import { NavLinkGen } from "./navLi";

export const SubNavi = ({ navLinks }) => {
  return (
    <motion.nav
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: "auto", opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.1, ease: "easeInOut" }}
      className="w-40 pb-4 ml-3 lg:text-sm flex flex-col subNav overflow-hidden"
    >
      <motion.div
        initial="hidden"
        animate="visible"
        exit="hidden"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {navLinks.map((route, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: -10 },
              visible: { opacity: 1, y: 5 },
            }}
            transition={{ duration: 0.15 }}
          >
            <NavLinkGen
              path={route.path}
              text={route.text}
              color={route.color}
            />
          </motion.div>
        ))}
      </motion.div>
    </motion.nav>
  );
};
