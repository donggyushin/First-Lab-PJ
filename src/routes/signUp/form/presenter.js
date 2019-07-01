import React from "react";
import styled from "styled-components";
import { Divider, Radio, Input, Button, Modal, Icon, Select } from "antd";
import Colors from "../../../constants/colors";
import { DateInput } from "@opuscapita/react-dates";
import "./style.css";

const { Option } = Select;
const InputGroup = Input.Group;
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 150px;
`;

const Box = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;

const Row1 = styled.div`
  display: flex;
  align-items: flex-end;
`;

const BigText = styled.div`
  font-size: 30px;
  position: relative;
  top: 5px;
  margin-right: 15px;
`;

const YellowText = styled.div`
  color: ${Colors.deepOrange};
`;

const TinyText = styled.div``;

const Row2 = styled.div`
  display: flex;
  padding: 20px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 30px;
`;

const NormalText = styled.div`
  font-size: 17px;
  font-weight: 600;
  opacity: ${props => props.invisible && 0};
`;

const BlueText = styled.div``;

const Margin = styled.div`
  margin-top: 8px;
  margin-bottom: 8px;
`;

const EightyPercentView = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  padding-left: 20px;
`;

const RedTinyText = styled.div`
  color: ${Colors.redText};
`;

const GreenTinyText = styled.div`
  color: ${Colors.greenText};
`;

function PersonalInformationForm({
  gender,
  local,
  radioChange,
  inputChange,
  username,
  englishName,
  userID,
  password1,
  password2,
  doubleCheckButtonTapped,
  handleCancel,
  handleOk,
  visible,
  openPopup,
  organization,
  openJusoPopup,
  zipcode,
  fullAddress,
  cellphoneNumber,
  phoneNumber,
  faxNumber,
  typeOfUser,
  role,
  department,
  position,
  responsibility,
  recommendId,
  address,
  dateChange,
  birthDay
}) {
  return (
    <Container>
      <Box>
        <Margin />
        <Margin />
        <Margin />
        <Margin />
        <Row1>
          <BigText>회원정보입력</BigText>
          <YellowText>(선택입력)</YellowText>
          <TinyText>을 제외한 모든 항목은 필수 입력입니다. </TinyText>
        </Row1>
        <Divider />
        <Row2>
          <Column>
            <NormalText>이름</NormalText>
            <Margin />
            <Input value={username} onChange={inputChange} name={"username"} />
          </Column>
          <Column>
            <NormalText>출생연도</NormalText>
            <Margin />
            <DateInput
              dateFormat="dd/MM/yyyy"
              disabled={false}
              locale="en"
              onChange={dateChange}
              value={birthDay}
            />
          </Column>
          <Column>
            <NormalText>성별</NormalText>
            <Margin />
            <Radio.Group name={"gender"} onChange={radioChange} value={gender}>
              <Radio value={1}>남자</Radio>
              <Radio value={2}>여자</Radio>
            </Radio.Group>
          </Column>
          <Column>
            <NormalText>내외국인구분</NormalText>
            <Margin />
            <Radio.Group name={"local"} onChange={radioChange} value={local}>
              <Radio value={1}>내국인</Radio>
              <Radio value={2}>외국인</Radio>
            </Radio.Group>
          </Column>
        </Row2>
        <EightyPercentView>
          <Divider />
        </EightyPercentView>
        <Row2>
          <Column>
            <Row1>
              <NormalText>영문이름</NormalText>
              <YellowText>(선택입력)</YellowText>
            </Row1>
            <Margin />
            <Input
              value={englishName}
              onChange={inputChange}
              name={"english name"}
            />
          </Column>
        </Row2>
        <EightyPercentView>
          <Divider />
        </EightyPercentView>
        <Row2>
          <Column>
            <NormalText>사용자 ID</NormalText>
            <Margin />
            <Input value={userID} onChange={inputChange} name={"userID"} />
          </Column>
          <Column>
            <NormalText invisible={true}>중복확인</NormalText>
            <Margin />
            <Button onClick={doubleCheckButtonTapped} type="primary">
              중복확인
            </Button>
          </Column>
          <Column>
            <NormalText>비밀번호</NormalText>
            <Margin />
            <Input.Password
              onChange={inputChange}
              value={password1}
              name={"password1"}
            />
          </Column>
          <Column>
            <NormalText>비밀번호 확인</NormalText>
            <Margin />
            <Input.Password
              onChange={inputChange}
              value={password2}
              name={"password2"}
            />
          </Column>
        </Row2>
        <EightyPercentView>
          <Divider />
        </EightyPercentView>
        <Row2>
          <Column>
            <NormalText>이메일</NormalText>
            <Margin />
            <div style={{ width: "350px" }}>
              <Input placeholder="email@email" type="email" />
              <RedTinyText> * 가입완료 후 인증 메일이 발송됩니다. </RedTinyText>
            </div>
            <Margin />
            <TinyText>입력하신 이메일로 이메일을 수신하시겠습니까? </TinyText>
          </Column>
        </Row2>
        <EightyPercentView>
          <Divider />
        </EightyPercentView>
        <Row2>
          <Column>
            <NormalText>소속기관</NormalText>
          </Column>
          <Column>
            <Radio.Group
              name="organization"
              onChange={radioChange}
              value={organization}
            >
              <Radio value={1}>기관</Radio>
              <Radio value={2}>개인(소속기관 없음)</Radio>
            </Radio.Group>
            <Margin />
            {organization === 1 && (
              <Row1>
                <div style={{ marginRight: 30, width: 300 }}>
                  <Input />
                </div>
                <Button onClick={openPopup} type="primary">
                  찾아보기
                </Button>
              </Row1>
            )}

            <Margin />
            <Row1>
              <div
                style={{ position: "relative", bottom: -1, marginRight: 10 }}
              >
                <Icon type="exclamation-circle" />
              </div>
              개인 등록자는 일부NTIS 서비스에 대하여 사용권한이 제한될 수
              있습니다.
            </Row1>
          </Column>
        </Row2>
        <EightyPercentView>
          <Divider />
        </EightyPercentView>
        <Row2>
          <Row1>
            <Column>
              <NormalText>우편번호</NormalText>
              <Margin />
              <Row1>
                <div style={{ marginRight: 20 }}>
                  <Button onClick={openJusoPopup} type="primary">
                    우편번호검색
                  </Button>
                </div>
                <Input contentEditable={false} value={zipcode} />
              </Row1>
            </Column>
            <Column>
              <NormalText>주소</NormalText>
              <Margin />
              <Row1>
                <div style={{ width: 400 }}>
                  <Input contentEditable={false} value={fullAddress} />
                </div>
              </Row1>
            </Column>
          </Row1>
        </Row2>
        <Row2>
          <div style={{ width: 730, marginTop: -20 }}>
            <Input
              value={address}
              onChange={inputChange}
              name={"address"}
              placeholder={"나머지 주소를 입력해주세요"}
            />
          </div>
        </Row2>
        <EightyPercentView>
          <Divider />
        </EightyPercentView>
        <Row2>
          <div style={{ marginBottom: 0, marginRight: 10 }}>
            <Icon type="info-circle" />
          </div>
          <RedTinyText>
            연락할 수 있는 전화번호 2개중 하나는 (필수입력)으로 선택해야 합니다.{" "}
          </RedTinyText>
        </Row2>
        <Row2>
          <Column>
            <div style={{ marginBottom: 15 }}>
              <Row1>
                <NormalText>휴대전화 번호</NormalText>
                <div style={{ marginBottom: 2 }}>
                  <RedTinyText>(필수입력 선택)</RedTinyText>
                </div>
              </Row1>
            </div>
            <Input
              value={cellphoneNumber}
              placeholder={"- 없이 입력해주세요. "}
              name={"cellphone"}
              onChange={inputChange}
              type="number"
            />
          </Column>
          <Column>
            <div style={{ marginBottom: 15 }}>
              <Row1>
                <NormalText>전화 번호</NormalText>
                <div style={{ marginBottom: 2 }}>
                  <RedTinyText>(필수입력 선택)</RedTinyText>
                </div>
              </Row1>
            </div>
            <Input
              name={"phone"}
              value={phoneNumber}
              placeholder={"- 없이 입력해주세요. "}
              onChange={inputChange}
              type="number"
            />
          </Column>
          <Column>
            <div style={{ marginBottom: 15 }}>
              <Row1>
                <NormalText>팩스</NormalText>
                <div style={{ marginBottom: 2 }}>
                  <YellowText>(선택 입력)</YellowText>
                </div>
              </Row1>
            </div>
            <Input
              name={"fax"}
              value={faxNumber}
              placeholder={"- 없이 입력해주세요. "}
              onChange={inputChange}
              type="number"
            />
          </Column>
        </Row2>
        <EightyPercentView>
          <Divider />
        </EightyPercentView>
        <Row2>
          <Column>
            <div style={{ marginBottom: 15 }}>
              <Row1>
                <NormalText>사용자 유형</NormalText>
                <RedTinyText>(필수입력)</RedTinyText>
              </Row1>
            </div>
            <InputGroup compact>
              <Select
                name={"typeOfUser"}
                style={{ width: 250 }}
                defaultValue={typeOfUser}
              >
                <Option value="전체">전체</Option>
                <Option value="연구자(대학,출연(연),연구소 등">
                  연구자(대학,출연(연),연구소 등
                </Option>
                <Option value="연구자(기업)">연구자(기업)</Option>
                <Option value="과제관리기관">과제관리기관</Option>
                <Option value="부처">부처</Option>
                <Option value="일반이용자">일반이용자</Option>
              </Select>
            </InputGroup>
          </Column>
          <Column>
            <div style={{ marginBottom: 15 }}>
              <Row1>
                <NormalText>직업</NormalText>
                <YellowText>(선택입력)</YellowText>
              </Row1>
            </div>
            <InputGroup compact>
              <Select name={"role"} style={{ width: 150 }} defaultValue={role}>
                <Option value="선택">선택</Option>
                <Option value="공무원">공무원</Option>
                <Option value="연구원">연구원</Option>
                <Option value="교수">교수</Option>
                <Option value="학생">학생</Option>
                <Option value="사무직">사무직</Option>
                <Option value="제조업">제조업</Option>
                <Option value="IT관련종사자">IT관련종사자</Option>
                <Option value="금융업">금융업</Option>
                <Option value="언론사">언론사</Option>
                <Option value="전문직">전문직</Option>
                <Option value="기타">기타</Option>
              </Select>
            </InputGroup>
          </Column>
          <Column>
            <div style={{ marginBottom: 15 }}>
              <Row1>
                <NormalText>부서명</NormalText>
                <YellowText>(선택입력)</YellowText>
              </Row1>
            </div>
            <Input
              name={"department"}
              value={department}
              onChange={inputChange}
            />
          </Column>
          <Column>
            <div style={{ marginBottom: 15 }}>
              <Row1>
                <NormalText>직위</NormalText>
                <YellowText>(선택입력)</YellowText>
              </Row1>
            </div>
            <Input name={"position"} value={position} onChange={inputChange} />
          </Column>
        </Row2>
        <EightyPercentView>
          <Divider />
        </EightyPercentView>
        <Row2>
          <Column>
            <div style={{ marginBottom: 15 }}>
              <Row1>
                <NormalText>담당업무</NormalText>
                <YellowText>(선택입력)</YellowText>
              </Row1>
            </div>
            <Input
              value={responsibility}
              onChange={inputChange}
              name={"responsibility"}
            />
          </Column>
          <Column>
            <div style={{ marginBottom: 15 }}>
              <Row1>
                <NormalText>추천인 ID</NormalText>
                <YellowText>(선택입력)</YellowText>
              </Row1>
            </div>
            <Input
              value={recommendId}
              onChange={inputChange}
              name={"recommendId"}
            />
          </Column>
        </Row2>
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 80
          }}
        >
          <Button size="large" type="primary">
            Forward
            <Icon type="right" />
          </Button>
        </div>
      </Box>
      <Modal
        title="Basic Modal"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </Container>
  );
}

export default PersonalInformationForm;
