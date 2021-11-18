-- DB 생성
CREATE DATABASE IF NOT EXISTS surveyzone;

-- DB 기본 charset 한글(utf-8)로 변경
ALTER DATABASE surveyzone DEFAULT CHARACTER SET utf8;

-- 생성한 DB 사용
USE surveyzone;

-- 테이블 구조 정의
CREATE TABLE IF NOT EXISTS T_USER(
    `idx`         INT     NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `account`     TEXT    NOT NULL, -- 메타마스크 주소 저장
    `kakao`       CHAR(1) NOT NULL, -- 카카오 계정 인증 여부
    `interests`   TEXT    NOT NULL  -- JSON 형태로 저장된 관심사 정보
);

DROP TABLE IF EXISTS T_SURVEY;
CREATE TABLE IF NOT EXISTS T_SURVEY(
    `idx`           INT             NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `category`      INT             NOT NULL,
    `img`           VARCHAR(50)     NOT NULL,
    `title`         VARCHAR(50)     NOT NULL,
    `desc`          TEXT            NULL,
    `sdate`         INT             NOT NULL,
    `edate`         INT             NOT NULL,
    `max`           INT             NOT NULL,
    `reward`        INT             NOT NULL,
    `vp`            TEXT            NOT NULL
);

-- 더미 데이터 삽입
-- 1
INSERT INTO T_SURVEY VALUES(NULL,0,"cute.jpg","배달 음식 관련 조사","설명입니다.",201105, 201106, 255, 6, '{"age":1,"name":2}');
INSERT INTO T_SURVEY VALUES(NULL,0,"cute2.jpg","습관에 대한 설문조사","설명",201105,201106, 255,6,'{"age":2,"name":2}');
INSERT INTO T_SURVEY VALUES(NULL,0,"cute.jpg","2021 정부혁신 국민인식조사 설문지","정부는 2018년 3월 19일 ‘정부혁신 종합 추진계획’을 발표하고, 국민이 주인인 정부를 실현하는 새 정부혁신을 국민께 약속했습니다. ∎ 정부혁신 첫 번째 전략은 ‘정부 운영을 사회적 가치 중심으로 전환’하는 것입니다. 정부의 정책과 재원 배분을 공공의 이익과 공동체 발전에 이바지하는 사회적 가치 중심으로 전환합니다. ∎ 두 번째 전략은 ‘참여와 협력’을 통해 할 일을 하는 정부를 구현하는 것입니다. 기관 간 칸막이를 허물고, 국민을 정책 제안과 결정, 집행, 평가 과정에 함께 참여하게 합니다. ∎ 세 번째 전략은 낡은 관행을 혁신하여 ‘신뢰받는 정부’를 구현하는 것으로 국민이 원하는 깨끗한 공직사회를 만드는 것이 목표입니다. 청와대 국민청원, 정부24, 국민·주민참여예산제, 광화문1번가 열린 포럼, 국민청원 안전검사제 등이 정부혁신 실제 사례로, 국민의 더 나은 삶을 위한 모든 정책, 사업 등을 통칭합니다. ",201103,201112,6, 255, '{"age":1,"name":1}');
INSERT INTO T_SURVEY VALUES(NULL,0,"cute2.jpg","창 PC 게임에 대한 설문 조사","",211023,211126, 255, 6,'{}');
INSERT INTO T_SURVEY VALUES(NULL,0,"cute.jpg","소비자 의견 조사(PC전용) ","",211021,211126, 255, 11,'{}');
-- 6
INSERT INTO T_SURVEY VALUES(NULL,0,"cute2.jpg","소비자 의견 조사(PC전용) ","",211023,211126, 255, 11,'{}');
INSERT INTO T_SURVEY VALUES(NULL,0,"cute.jpg","국민 의견 조사 ","",211023,211126, 255, 11,'{}');
INSERT INTO T_SURVEY VALUES(NULL,0,"cute2.jpg","소비자의견조사  ","",211023,211126, 255, 11,'{}');
INSERT INTO T_SURVEY VALUES(NULL,0,"cute.jpg","소비자 의견 조사(PC전용)  ","",211023,211126, 255, 11,'{}');
INSERT INTO T_SURVEY VALUES(NULL,0,"cute2.jpg","소비자 의견 조사  ","",211023,211126, 255, 11,'{}');
-- 11
INSERT INTO T_SURVEY VALUES(NULL,0,"cute.jpg","일반인 인식 조사 ","",211023,211126, 255, 11,'{}');
INSERT INTO T_SURVEY VALUES(NULL,0,"cute2.jpg","국민 인식 조사 ","",211023,211126, 255, 11,'{}');
INSERT INTO T_SURVEY VALUES(NULL,0,"cute.jpg","TV방송 시청자 조사 ","",211023,211126, 255, 11,'{}');
INSERT INTO T_SURVEY VALUES(NULL,0,"cute2.jpg","소비자 의견 조사(PC전용) ","",211023,211126, 255, 11,'{}');
INSERT INTO T_SURVEY VALUES(NULL,0,"cute.jpg","신항만 개발 관련 국민 인식조사 ","",211023,211126, 255, 11,'{}');
-- 16
INSERT INTO T_SURVEY VALUES(NULL,0,"cute2.jpg","소비자 의견 조사(PC전용) ","",211023,211126, 255, 11,'{}');
INSERT INTO T_SURVEY VALUES(NULL,0,"cute.jpg","인지 관련 설문 조사 ","",211023,211126, 255, 11,'{}');
INSERT INTO T_SURVEY VALUES(NULL,0,"cute2.jpg","인지 관련 설문 조사 대상자 모집안내 ","",211023,211126, 255, 11,'{}');
INSERT INTO T_SURVEY VALUES(NULL,0,"cute.jpg","이동식 주택/주택리모델링 관련 조사 ","",211023,211126, 255, 11,'{}');
INSERT INTO T_SURVEY VALUES(NULL,0,"cute2.jpg","인테리어 관련 조사 ","",211023,211126, 255, 11,'{}');
-- 21
INSERT INTO T_SURVEY VALUES(NULL,0,"cute.jpg","생수 구입자 대상 시장 조사 ","",211023,211126, 255, 11,'{}');


-- AUTO INCREMENT 초기화
SET @IDX=0;
UPDATE T_SURVEY SET T_SURVEY.idx = @IDX:=@IDX+1;


-- 데이터 조회
SELECT * FROM T_SURVEY;
SELECT * FROM T_USER;