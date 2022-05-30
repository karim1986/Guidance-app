import { useState } from "react";
import { MdEventAvailable } from "react-icons/md";
import { AiOutlineEdit, AiOutlineExclamationCircle } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { TiMessages } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import Modal from "./postModal/Modal";
import EventModal from "../components/eventModal/Modal";

const NewcomerBox = () => {
  const [data, setData] = useState();
  const [showModal, setShowModal] = useState(false);
  const [showModalTwo, setShowModalTwo] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useSelector((state) => state.auth);
  // const { profilePicture, selectedRole, username } = user;
  // console.log(profilePicture, selectedRole, username);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const openModalTwo = () => {
    setShowModalTwo((prev) => !prev);
  };
  return (
    <div className="newcomer-profile-box">
      <div className="logout-bnt" onClick={onLogout}>
        <FiLogOut size={15} color="#fff" />
        <span>Log out</span>
      </div>
      <div className="guidance-logo">
        <h3>Guidance</h3>
      </div>
      <div className="newcomer-profile">
        <div className="newComer__profile__image">
          <div className="line__deco"></div>
          <img src={user && user.profilePicture} alt="" />
        </div>
        <div className="flex-column">
          <div className="newComer__profile__name">
            <p>{user.username}</p>
          </div>
          <div className="newComer__profile_status">
            <p>{user.selectedRole}</p>
          </div>
          <div className="newComer__city">
            <p>Berlin</p>
          </div>
        </div>
      </div>
      <div className="profile__functionalties">
        <div className="newcomer-messages add__style">
          <p>Messages</p>
          <span className="icon__background">
            <TiMessages color="#000" size={20} />
          </span>
        </div>
        <div className="newcomer-posts add__style">
          <p>Post</p>
          <span className="icon__background">
            <AiOutlineEdit color="#000" size={20} onClick={openModal} />
          </span>
          <Modal showModal={showModal} setShowModal={setShowModal} />
        </div>
        <div className="newcomer-events add__style">
          <p>Create Event</p>
          <span className="icon__background">
            <MdEventAvailable color="#000" size={20} onClick={openModalTwo} />
          </span>
          <EventModal
            showModalTwo={showModalTwo}
            setShowModalTwo={setShowModalTwo}
          />
        </div>
        <div className="newcomer-events add__style">
          <p>Interested in</p>
          <span className="icon__background">
            <AiOutlineExclamationCircle color="#000" size={20} />
          </span>
        </div>
      </div>
      <div className="liner__deco__two"></div>
    </div>
  );
};

export default NewcomerBox;
