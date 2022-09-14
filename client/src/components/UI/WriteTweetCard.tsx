import Button from 'components/buttons/Button';
import React from 'react';
import GIF from 'assets/icons/gif.svg';
import SMILE from 'assets/icons/smile.svg';
import { useMutation } from '@tanstack/react-query';
import { createTweet } from 'api/endpoints';
import { ToastContainer, toast } from 'react-toastify';

type Props = {
  refetch: any;
};

const WriteTweetCard = (props: Props) => {
  const { refetch } = props;

  const [text, setText] = React.useState('');
  const [image, setImage] = React.useState('');

  const { mutateAsync, isLoading } = useMutation(createTweet);

  const handleImage = (e: any) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (text === '' || image === '') {
      toast.error('Please fill all the fields');
    } else {
      const formData = new FormData();

      formData.append('text', text);
      formData.append('imgfile', image);

      mutateAsync(formData).then(() => {
        setText('');
        setImage('');
        toast.success('Tweet created successfully');
        refetch();
      });
    }
  };

  return (
    <div className="flex p-2 border-b border-[#daedf0] dark:border-gray-700">
      <div>
        <img
          src="https://aui.atlassian.com/aui/latest/docs/images/avatar-person.svg"
          width={40}
          alt="as"
        />
      </div>
      <div className="w-full">
        <div>
          <textarea
            placeholder="What's happening?"
            className="resize-none w-full outline-none p-2 tracking-wide bg-white dark:bg-black text-black dark:text-white"
            rows={2}
            maxLength={120}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className="flex justify-between w-full ">
          <div className="flex gap-1">
            <button type="button" className="hover:bg-main/10 transition-all p-2 rounded-full">
              <img src={GIF} alt="" width={24} />
            </button>
            <button type="button" className="hover:bg-main/10 transition-all p-2 rounded-full">
              <img src={SMILE} alt="" width={24} />
            </button>
            <button type="button" className="hover:bg-main/10 transition-all p-2 rounded-full w-36">
              <input type="file" onChange={(e) => handleImage(e)} className="custom-file-upload" />
            </button>
          </div>

          {isLoading ? (
            <div className="flex justify-center items-center">Loading...</div>
          ) : (
            <Button onClick={handleSubmit}>Tweet</Button>
          )}
        </div>
        <ToastContainer
          position="bottom-right"
          autoClose={1500}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          hideProgressBar
        />
      </div>
    </div>
  );
};

export default WriteTweetCard;
