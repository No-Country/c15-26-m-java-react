package com.cohorte15.ecommerce.Services;

import com.cohorte15.ecommerce.Entities.Image;
import com.cohorte15.ecommerce.Repositories.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ImageServiceImpl extends BaseServiceImpl<Image, Long> implements ImageService {

    @Autowired
    private final ImageRepository imageRepository;

    public ImageServiceImpl(ImageRepository imageRepository) {
        super(imageRepository);
        this.imageRepository = imageRepository;
    }

}
