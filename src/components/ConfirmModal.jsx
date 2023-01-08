import ModalContainer from "./ModalContainer";
import { motion } from "framer-motion";
function ConfirmModal({
  message,
  hideModalHandler,
  confirmedResponseHandler,
  unconfirmedResponseHandler,
}) {

  const yesBtnHandler = () => {
    confirmedResponseHandler();
    hideModalHandler(true);
  };
  const noBtnHandler = () => {
    unconfirmedResponseHandler();
    hideModalHandler(true);
  };
  return (
    <ModalContainer setShoModal={hideModalHandler}>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        className="w-fit min-h-fit max-h-full p-8 bg-white shadow dark:bg-[#272835] z-50 flex flex-col gap-8 rounded-lg text-center"
      >
        <div className="dark:text-white text-xl capitalize">{message}</div>
        <div className="flex  justify-center gap-4">
          <button
            className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded active:scale-110  transition-transform"
            onClick={yesBtnHandler}
          >
            Yes
          </button>
          <button
            className="bg-pink-600 hover:bg-pink-700 text-white py-2 px-4 rounded active:scale-110 transition-transform"
            onClick={noBtnHandler}
          >
            Cancel
          </button>
        </div>
      </motion.div>
    </ModalContainer>
  );
}

export default ConfirmModal;
