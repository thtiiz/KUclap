import styled from "styled-components";
import { Clap, Boo } from "../../assets/icons/Icons";
import { useState } from "preact/hooks";

const Container = styled.div`
  border: 0.2rem solid #e0e0e0;
  border-radius: 1rem;
  margin: 2rem 0;
  padding: 1.2rem 1.6rem;
`;

const Content = styled.div`
  font-size: 2rem;
  color: #4f4f4f;
`;

const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DetailContainer = styled.div`
  font-size: 1.6rem;
  display: flex;
  color: #828282;
  margin-top: 0.8rem;
  justify-content: space-between;
  flex-direction: column;
`;

const DetailRight = styled.div`
  display: flex;
  width: 14rem;
  justify-content: space-between;
`;

const Button = styled.div`
    display: flex;
    width: ${(props) => (props.type === "report" ? "6rem" : "auto")};
    text-align: right;
    align-items: center;
    justify-content: space-between;
    user-select: none;
    cursor: pointer;

    &:hover {
        color: #9AC1EE;
        svg {
            #clap {
                fill: #9AC1EE;
            }
            #boo {
                fill: #EEA99A;
            }
        }
    }
  }

  &:active {
    svg {
      #clap {
        fill: #2f80ed;
      }
      #boo {
        fill: #eb5757;
      }
    }
  }
`;

const ButtonLeft = styled.div`
  display: flex;
  width: 18rem;
  justify-content: space-between;
  align-items: center;
  color: #bdbdbd;

  span {
    user-select: none;
    width: 3rem;
    font-size: 2rem;
  }
`;

const ModalBackdrop = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-color: hsla(10, 10%, 10%, 50%);
  display: ${(props) => (props.show === true ? "block" : "none")};
  z-index: 1;
  cursor: pointer;
`;

const Modal = styled.div`
  border-radius: 10px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 2.8rem 1.2rem;
  font-weight: 500;
  font-size: 2rem;
  line-height: 3.4rem;
  text-align: center;
  display: ${(props) => (props.show === true ? "block" : "none")};
  z-index: 1;
  max-width: 42rem;
  width: 84%;
`;

const ModalActions = styled.div`
  align-self: center;
  padding: 1.4rem 0 0;
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: center;
`;

const ConfirmButton = styled.div`
  background-color: #eb5757;
  align-self: center;
  color: #fff;
  padding: 0.4rem 2.4rem;
  border-radius: 0.6rem;
  font-size: 2rem;
  font-weight: 500;
  cursor: pointer;
  width: 12.2rem;
  margin: 1rem 1rem;
`;

const CancelButton = styled(ConfirmButton)`
  padding: 0.4rem 1.2rem;
  font-size: 2rem;
  text-align: center;
  background-color: #bdbdbd;
`;

const ReviewCard = (props) => {
  const { reviewId, text, clap, boo, grade, author, createdAt } = props;
  const [actions, setActions] = useState({
    clap: clap,
    boo: boo,
  });

  const [showDialog, setDialog] = useState(false);
  const pareDate = (dateUTC) => {
    // REQUIR implement parser for better ux (convert utc timezone)
    // 2020-04-15T01:25:52.150+00:00 => 15 เม.ษ 2020
    let date = dateUTC;
    return date;
  };

  return (
    <Container>
      <Content>
        {" "}
        {text}
        การบ้านน้อยมากกกบ 8น้อยมากกมากกกบ 8น้อยมากกยมากมากกกบ
        8น้อยมากกยมากมากกกบ 8น้อยมากกยมากมากกกบ 8น้อยมากกยมากมากกกบ
        8น้อยมากกยมากsยมากกกบ 8 ชม. ได้ A เ ชม. ได้ A เย้{" "}
      </Content>
      <CardDetails>
        <DetailContainer>
          โดย {author}
          <DetailRight>
            <span>เกรด {grade}</span>
            <span>{pareDate(createdAt)}</span>
          </DetailRight>
          <Button type="report" onClick={() => setDialog(true)}>
            Report
          </Button>
        </DetailContainer>
        <DetailContainer>
          <ButtonLeft>
            <Button
              onClick={() => setActions({ ...actions, clap: actions.clap + 1 })}
            >
              <Clap />
            </Button>
            <span>{actions.clap}</span>
            <Button
              onClick={() => setActions({ ...actions, boo: actions.boo + 1 })}
            >
              <Boo />
            </Button>
            <span>{actions.boo}</span>
          </ButtonLeft>
        </DetailContainer>
      </CardDetails>
      <ModalBackdrop show={showDialog} onClick={() => setDialog(false)} />
      <Modal show={showDialog}>
        แจ้งลบรีวิวหรือไม่ ?
        <ModalActions>
          <CancelButton onClick={() => setDialog(false)}>ยกเลิก</CancelButton>
          <ConfirmButton>แจ้งลบ</ConfirmButton>
        </ModalActions>
      </Modal>
    </Container>
  );
};
export default ReviewCard;