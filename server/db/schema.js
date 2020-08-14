-- Table: sdc_products.reviews

-- DROP TABLE sdc_products.reviews;

CREATE TABLE sdc_products.reviews
(
	fk_id integer NOT NULL,
    id integer NOT NULL,
    reveiw_date character varying(100) COLLATE pg_catalog."default",
    summary character varying(60) COLLATE pg_catalog."default" NOT NULL,
    recommend integer DEFAULT 0,
    response character varying(1000) COLLATE pg_catalog."default",
    body character varying(1000) COLLATE pg_catalog."default" NOT NULL,
    reviewer_name character varying(60) COLLATE pg_catalog."default" NOT NULL,
    helpfulness integer DEFAULT 0,
    rating smallint,
	reported integer DEFAULT 0

)

TABLESPACE pg_default;

ALTER TABLE sdc_products.reviews
    OWNER to postgres;