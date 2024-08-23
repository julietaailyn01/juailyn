import { Button, Box } from '@chakra-ui/react';

interface CustomButtonProps {
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  issubmit?: boolean;
}

const CustomButton = ({issubmit= false, text, icon, onClick }: CustomButtonProps) => {
  return (
    <Box position="relative" display="inline-block">
      <Button
        variant="outline"
        position="relative"
        borderWidth="2px"
        borderColor="#82a56d"
        color="#82a56d"
        fontWeight="bold"
        onClick={onClick}
        _before={{
          content: '""',
          position: 'absolute',
          top: '10px',
          left: '10px',
          width: '100%',
          height: '100%',
          bgImage: 'linear-gradient(135deg, rgba(253, 147, 149, 0.3) 20%, transparent 10%, transparent 50%, rgba(253, 147, 149, 0.3) 50%, rgba(253, 147, 149, 0.3) 70%, transparent 70%, transparent)',
          bgSize: '10px 10px',
          zIndex: -1,
          transition: 'top 0.5s ease, left 0.5s ease',
        }}
        _hover={{
          color: '#4b643b',
          borderColor: '#4b643b',
          _before: {
            top: '0px',
            left: '0px',
          },
        }}
        _active={{
          transform: 'scale(0.98)',
        }}
        type={issubmit ? 'submit' : 'button'}	
      >
        {icon ? icon : text}
      </Button>
    </Box>
  );
};

export default CustomButton;
