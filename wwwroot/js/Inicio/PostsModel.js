class Posts {
    id
    created_at
    description
    url
    likes
    username
    name
    profile_image
    image = [];

    constructor(post) {
        this.id = post.id;
        this.created_at = post.created_at;
        this.description = post.description;
        this.url = post.urls.full;
        this.likes = post.likes;
        this.name = post.user.name;
        this.username = post.user.username;
        this.profile_image = post.user.profile_image.large;
        this.image = post.image || [];
    }

    getId() {
        return this.id;
    }

    setId(id) {
        this.id = id;
    }

    getCreatedAt() {
        return this.created_at;
    }

    setCreatedAt(created_at) {
        this.created_at = created_at;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getUrl() {
        return this.url;
    }

    setUrl(url) {
        this.url = url;
    }

    getLikes() {
        return this.likes;
    }

    setLikes(likes) {
        this.likes = likes;
    }

    getUsername() {
        return this.username;
    }

    setUsername(username) {
        this.username = username;
    }

    getProfileImage() {
        return this.profile_image;
    }

    setProfileImage(profile_image) {
        this.profile_image = profile_image;
    }
}