import { useCallback, useEffect, useState } from 'react';
import Input from '@/components/ui/Input';
import Button from '@/components/ui/Button';
import SurveyAnswerTag from '@/components/admin/SurveyAnswerTag';
import { insertAdminSurvey } from '@/api/admin/adminRequests';
import Datepicker from 'react-tailwindcss-datepicker';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';

/**
 * 관리자 수요조사 등록/조회/수정 페이지
 */

interface DateValueType {
  startDate: string | null | Date;
  endDate: string | null | Date;
}
const AdminSurveyDetail = () => {
  const [title, setTitle] = useState<string>('');
  const [surveyDate, setSurveyDate] = useState<DateValueType | null>({
    startDate: null,
    endDate: null,
  });
  const [answer, setAnswer] = useState<string>('');
  const [answerList, setAnswerList] = useState<string[]>([]);
  const [isValid, setIsValid] = useState<boolean>(false);

  const navigate = useNavigate();

  useEffect(() => {
    setIsValid(
      title !== '' &&
        surveyDate?.startDate !== null &&
        surveyDate?.endDate !== null &&
        answerList.length !== 0,
    );
  }, [title, surveyDate, answerList]);

  const handleValueChange = (newDate: DateValueType | null) => {
    setSurveyDate(newDate);
  };

  const handleAnswerAddClick = useCallback(() => {
    if (answer.trim()) {
      setAnswerList([...answerList, answer.trim()]);
      setAnswer('');
    }
  }, [answerList, answer]);

  const handleDeleteAnswer = useCallback(
    (answer: string) => {
      setAnswerList(answerList.filter((a) => a !== answer));
    },
    [answerList],
  );

  const handleClickSurveyAdd = () => {
    if (surveyDate?.startDate && surveyDate.endDate) {
      const request = {
        title: title,
        startDate: surveyDate.startDate.toString(),
        endDate: surveyDate.endDate.toString(),
        options: answerList.map((answer) => {
          return { content: answer };
        }),
      };

      try {
        insertAdminSurvey(request).then((res) => {
          // TODO : 등록 성공 모달
          // navigate(-1);
        });
      } catch (error) {
        // TODO : 예외처리 에러 모달
      }
    }
    navigate(-1);
  };

  const today = new Date();

  return (
    <div className="flex h-screen w-full flex-col bg-gray-100 px-5 py-10">
      <h1 className="text-2xl font-bold">수요조사 등록</h1>
      <form className="mt-10">
        <div className="flex flex-col gap-6">
          <Input
            name="title"
            label="수요조사 제목"
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            placeholder="수요조사의 제목을 입력하세요."
            value={title}
          />

          <label
            className="sm:text-baser text-xs text-subTextAndBorder"
            htmlFor="date"
          >
            수요조사 기간
            <Datepicker
              i18n={'ko'}
              inputClassName={
                'mt-1 h-12 w-full rounded-md border-2 border-subTextAndBorder px-3 py-2 text-xs outline-none transition focus:border-accent sm:h-12 sm:text-base'
              }
              primaryColor={'teal'}
              startFrom={today}
              value={surveyDate}
              readOnly={true}
              onChange={handleValueChange}
              minDate={moment().add(1, 'day').toDate()}
            />
          </label>

          <div className="flex gap-5">
            <div className="flex-grow">
              <Input
                name="answer"
                label="수요조사 선택지"
                onChange={(e) => {
                  setAnswer(e.target.value);
                }}
                placeholder="선택지를 입력 후 추가 버튼을 클릭하세요."
                onKeyUp={(e) => {
                  if (e.key === 'Enter') {
                    handleAnswerAddClick();
                  }
                }}
                value={answer}
              />
            </div>
            <div className="min-w-[80px] self-end">
              <Button
                onClick={handleAnswerAddClick}
                contents={'추가'}
                secondary
              />
            </div>
          </div>

          <ul className="flex min-h-[40px] gap-3">
            {answerList.map((answer, index) => (
              <SurveyAnswerTag
                answer={answer}
                key={index}
                onDelete={handleDeleteAnswer}
              />
            ))}
          </ul>

          <div className="mt-10 min-w-[120px] self-end">
            <Button
              onClick={handleClickSurveyAdd}
              contents={'등록하기'}
              disabled={!isValid}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AdminSurveyDetail;
