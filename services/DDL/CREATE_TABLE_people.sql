CREATE TABLE IF NOT EXISTS public.people
(
    "ID" integer NOT NULL DEFAULT nextval('"people_ID_seq"'::regclass),
    "FirstName" character varying(32) COLLATE pg_catalog."default" NOT NULL,
    "LastName" character varying(32) COLLATE pg_catalog."default" NOT NULL,
    "Email" character varying(64) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT people_pkey PRIMARY KEY ("ID")
)