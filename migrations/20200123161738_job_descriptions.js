
exports.up = function(knex) {
    return knex.schema.createTable('job_descriptions', tbl => {
        tbl.increments()

        tbl.integer('job_id', 255)
        .references("id")
        .inTable("job_listings")
        .notNullable()
        .onDelete('CASCADE')
      
        tbl.varchar("description", 5000).notNullable()
    });
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('job_companies')
};