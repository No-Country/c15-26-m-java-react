package com.cohorte15.ecommerce.Controllers;

import com.cohorte15.ecommerce.Entities.BaseEntidad;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMethod;

import java.io.Serializable;

@CrossOrigin(origins = "*", methods = {RequestMethod.DELETE, RequestMethod.PUT, RequestMethod.GET, RequestMethod.POST, RequestMethod.OPTIONS})
public interface BaseController <E extends BaseEntidad, ID extends Serializable> {

    public ResponseEntity<?> getAll();

    public ResponseEntity<?> getAll(Pageable pageable);

    public ResponseEntity<?> getOne(@PathVariable ID id);

    public ResponseEntity<?> save(@RequestBody E entity);

    public ResponseEntity<?> update(@PathVariable ID id, @RequestBody E entity);

    public ResponseEntity<?> delete(@PathVariable ID id);

}