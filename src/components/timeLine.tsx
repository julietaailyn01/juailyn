import { Box, Heading, VStack, Text, Container, Flex } from '@chakra-ui/react';
import { FaCircle } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';

const experiences = [
  {
    id: 1,
    dateId: 'experience1.date',
    titleId: 'experience1.title',
    companyId: 'experience1.company',
    locationId: 'experience1.location',
    descriptionId: 'experience1.description',
  },
  {
    id: 2,
    dateId: 'experience2.date',
    titleId: 'experience2.title',
    companyId: 'experience2.company',
    locationId: 'experience2.location',
    descriptionId: 'experience2.description',
  },
  {
    id: 3,
    dateId: 'experience3.date',
    titleId: 'experience3.title',
    companyId: 'experience3.company',
    locationId: 'experience3.location',
    descriptionId: 'experience3.description',
  },
  {
    id: 4,
    dateId: 'experience4.date',
    titleId: 'experience4.title',
    companyId: 'experience4.company',
    locationId: 'experience4.location',
    descriptionId: 'experience4.description',
  },
];

const Timeline = () => {
  return (
    <Container maxW="container.md" py={10}>
      <Heading as="h2" size="xl" mb={8} textAlign="center" fontFamily="'Courier Prime', monospace">
        <FormattedMessage id="experienceTitle" defaultMessage="Experiencia Profesional" />
      </Heading>
      <Box position="relative" pl={10} _before={{
        content: '""',
        position: 'absolute',
        left: '30px',
        top: 0,
        bottom: 0,
        width: '2px',
        bgColor: 'gray.200',
      }}>
        {experiences.map((exp, index) => (
          <Flex key={exp.id} gap={5} mb={10} alignItems="center" position="relative">
            <Box position="absolute" left="22px">
              <FaCircle size="12px" color={index % 2 === 0 ? '#fd9395' : '#82a56d'} />
            </Box>
            <Box ml={10}>
              <Text fontSize="sm" fontWeight="bold" fontFamily="'Playfair Display', serif">
                <FormattedMessage id={exp.dateId} />
              </Text>
              <Heading size="md" fontFamily="'Playfair Display', serif">
                <FormattedMessage id={exp.titleId} />
              </Heading>
              <Text fontSize="md" fontWeight="bold" color="gray.600" fontFamily="'Lora', serif">
                <FormattedMessage id={exp.companyId} /> · <FormattedMessage id={exp.locationId} />
              </Text>
              <Text fontSize="lg" mt={2} fontFamily="'Lora', serif">
                <FormattedMessage id={exp.descriptionId} />
              </Text>
            </Box>
          </Flex>
        ))}
      </Box>
    </Container>
  );
};

export default Timeline;
