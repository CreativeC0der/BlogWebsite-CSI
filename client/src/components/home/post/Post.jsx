
import { styled, Box, Typography } from '@mui/material';

const Container = styled(Box)`
    background-color:#4c9cb4;
    color:white;
    border: 1px solid #d3cede;
    border-radius: 10px;
    margin: 10px;
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 350px;
    & > img, & > p {
        padding: 0 5px 5px 5px;
    }
`;

const Image = styled('img')({
    width: '100%',
    objectFit: 'cover',
    borderRadius: '10px 10px 0 0',
    height: 150
});

const Text = styled(Typography)`
    border:2px;
    color: #878787
    font-size: 12px;
`;

const Heading = styled(Typography)`
    font-size: 18px;
    font-weight: 600
`;

const Details = styled(Typography)`
    font-size: 14px;
    word-break: break-word;
`;



const Post = ({ post }) => {
    const url = post.picture ? post.picture : 'https://media.istockphoto.com/id/1220573371/photo/minimal-work-space-creative-flat-lay-photo-of-workspace-desk-top-view-office-desk-with-laptop.jpg?s=612x612&w=0&k=20&c=xmrSzPD4LCRhPD4L5TlttC88sSYe9Pc3J2ZnxCMzzyQ=';

    const addEllipsis = (str, limit) => {
        return str.length > limit ? str.substring(0, limit) + '...' : str;
    }

    return (
        <Container>
            <Image src={url} alt="post" />
            <Text>{post.categories}</Text>
            <Heading>{addEllipsis(post.title, 50)}</Heading>
            <Text>Author: {post.username}</Text>
            <Details hidden>{addEllipsis(post.description, 100)}</Details>
        </Container>
    )
}

export default Post;